// ==================== DASHBOARD JAVASCRIPT ====================
document.addEventListener('DOMContentLoaded', () => {
    const articleText = document.getElementById('article-text');
    const charCount = document.getElementById('char-count');
    const analyzeBtn = document.getElementById('analyze-btn');
    const singleResult = document.getElementById('single-result');
    const resultsPlaceholder = document.getElementById('results-placeholder');
    const resultsContent = document.getElementById('results-content');
    const uploadZone = document.getElementById('upload-zone');
    const batchFile = document.getElementById('batch-file');
    const batchLoading = document.getElementById('batch-loading');
    const batchResults = document.getElementById('batch-results');

    // Character counter
    articleText.addEventListener('input', () => {
        charCount.textContent = articleText.value.length;
    });

    // Single Analysis
    analyzeBtn.addEventListener('click', async () => {
        const text = articleText.value.trim();

        if (!text || text.length < 20) {
            showToast('Please enter at least 20 characters.', 'warning');
            return;
        }

        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = '<span class="spinner" style="width: 20px; height: 20px; border-width: 2px; margin: 0;"></span> Analyzing...';

        try {
            const response = await fetch('/dashboard/api/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text })
            });

            const data = await response.json();

            if (response.ok) {
                displayResults(data);
                resultsPlaceholder.classList.add('hidden');
                resultsContent.classList.remove('hidden');
            } else {
                showToast(data.error || 'Analysis failed.', 'danger');
            }
        } catch (error) {
            showToast('Network error. Please try again.', 'danger');
        } finally {
            analyzeBtn.disabled = false;
            analyzeBtn.innerHTML = '🚀 Analyze Article';
        }
    });

    function displayResults(data) {
        const isFake = data.prediction === 'fake';
        const color = isFake ? '#ff0055' : '#00ff9d';
        const icon = isFake ? '⚠️' : '✅';
        const borderClass = isFake ? 'fake' : 'real';

        resultsContent.innerHTML = `
            <div class="result-card ${borderClass}">
                <div class="verdict-badge ${borderClass}">
                    ${icon} ${data.prediction.toUpperCase()}
                </div>

                <div class="confidence-meter">
                    <div class="meter-label">
                        <span>Confidence</span>
                        <span style="color: ${color}; font-weight: 700;">${data.confidence.toFixed(1)}%</span>
                    </div>
                    <div class="meter-track">
                        <div class="meter-fill ${borderClass}" style="width: ${data.confidence}%"></div>
                    </div>
                </div>

                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="value">${data.sentiment_polarity > 0 ? '+' : ''}${data.sentiment_polarity}</div>
                        <div class="label">Polarity</div>
                    </div>
                    <div class="stat-item">
                        <div class="value">${data.sentiment_subjectivity}</div>
                        <div class="label">Subjectivity</div>
                    </div>
                    <div class="stat-item">
                        <div class="value">${data.tokens}</div>
                        <div class="label">Tokens</div>
                    </div>
                    <div class="stat-item">
                        <div class="value">${data.original_length}</div>
                        <div class="label">Characters</div>
                    </div>
                </div>

                <div class="explanation-box">
                    <strong style="color: ${color};">AI Explanation:</strong><br>
                    ${data.explanation}
                </div>

                ${data.top_terms && data.top_terms.length > 0 ? `
                <div style="margin-top: 1rem;">
                    <strong style="font-size: 0.85rem; color: var(--text-secondary);">Top TF-IDF Terms:</strong>
                    <div class="terms-list">
                        ${data.top_terms.map(t => `<span class="term-tag">${t[0]} (${t[1].toFixed(3)})</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    // Batch Upload
    uploadZone.addEventListener('click', () => batchFile.click());

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleBatchUpload(files[0]);
        }
    });

    batchFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleBatchUpload(e.target.files[0]);
        }
    });

    async function handleBatchUpload(file) {
        const validExts = ['.csv', '.xlsx', '.xls'];
        if (!validExts.some(ext => file.name.toLowerCase().endsWith(ext))) {
            showToast('Please upload a CSV or Excel file.', 'warning');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        uploadZone.classList.add('hidden');
        batchLoading.classList.remove('hidden');

        try {
            const response = await fetch('/dashboard/api/predict-batch', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                displayBatchResults(data);
                batchResults.classList.remove('hidden');
            } else {
                showToast(data.error || 'Batch analysis failed.', 'danger');
                uploadZone.classList.remove('hidden');
            }
        } catch (error) {
            showToast('Network error during batch upload.', 'danger');
            uploadZone.classList.remove('hidden');
        } finally {
            batchLoading.classList.add('hidden');
        }
    }

    function displayBatchResults(data) {
        const summaryHtml = `
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div class="stat-item">
                    <div class="value" style="color: var(--primary);">${data.total}</div>
                    <div class="label">Total</div>
                </div>
                <div class="stat-item">
                    <div class="value" style="color: var(--accent);">${data.fake_count}</div>
                    <div class="label">Fake</div>
                </div>
                <div class="stat-item">
                    <div class="value" style="color: var(--secondary);">${data.real_count}</div>
                    <div class="label">Real</div>
                </div>
                <div class="stat-item">
                    <div class="value" style="color: var(--warning);">${data.avg_confidence.toFixed(1)}%</div>
                    <div class="label">Avg Confidence</div>
                </div>
            </div>
        `;

        const tableHtml = `
            <div style="overflow-x: auto;">
                <table class="results-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Preview</th>
                            <th>Result</th>
                            <th>Confidence</th>
                            <th>Polarity</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.results.slice(0, 20).map((r, i) => `
                            <tr>
                                <td style="color: var(--text-secondary);">${i + 1}</td>
                                <td style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${r.text.substring(0, 80)}...</td>
                                <td><span class="badge ${r.prediction === 'fake' ? 'badge-fake' : 'badge-real'}">${r.prediction.toUpperCase()}</span></td>
                                <td style="color: var(--primary);">${r.confidence.toFixed(1)}%</td>
                                <td style="color: var(--text-secondary);">${r.sentiment_polarity > 0 ? '+' : ''}${r.sentiment_polarity}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                ${data.results.length > 20 ? `<p style="text-align: center; color: var(--text-secondary); margin-top: 1rem; font-size: 0.85rem;">Showing first 20 of ${data.results.length} results</p>` : ''}
            </div>
        `;

        batchResults.innerHTML = summaryHtml + tableHtml;
    }

    // Load Model Stats
    async function loadModelStats() {
        try {
            const response = await fetch('/dashboard/api/stats');
            const data = await response.json();

            if (response.ok && data.models) {
                const best = data.models[data.best_model];
                document.getElementById('stat-accuracy').textContent = (best.accuracy * 100).toFixed(1) + '%';
                document.getElementById('stat-precision').textContent = (best.precision * 100).toFixed(1) + '%';
                document.getElementById('stat-recall').textContent = (best.recall * 100).toFixed(1) + '%';
                document.getElementById('stat-f1').textContent = (best.f1 * 100).toFixed(1) + '%';
            }
        } catch (error) {
            console.log('Could not load model stats');
        }
    }

    loadModelStats();

    // Toast notification
    function showToast(message, type = 'info') {
        const container = document.querySelector('.flash-messages') || document.createElement('div');
        if (!container.classList.contains('flash-messages')) {
            container.className = 'flash-messages';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `flash ${type}`;
        toast.textContent = message;
        toast.style.animation = 'slideInRight 0.4s ease';
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            setTimeout(() => toast.remove(), 400);
        }, 5000);
    }
});
