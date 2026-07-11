// ==================== NEURON NETWORK BACKGROUND ====================
class NeuronNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.animationId = null;

        this.resize();
        this.initNodes();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    initNodes() {
        const nodeCount = Math.floor((this.width * this.height) / 12000);
        this.nodes = [];

        for (let i = 0; i < nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(0, 243, 255, ',
            'rgba(0, 255, 157, ',
            'rgba(0, 150, 255, ',
            'rgba(100, 200, 255, '
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.initNodes();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        // Touch support
        window.addEventListener('touchmove', (e) => {
            this.mouse.x = e.touches[0].clientX;
            this.mouse.y = e.touches[0].clientY;
        });

        window.addEventListener('touchend', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    drawNode(node) {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const alpha = 0.3 + pulse * 0.4;

        // Glow effect
        const gradient = this.ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * 4
        );
        gradient.addColorStop(0, node.color + alpha + ')');
        gradient.addColorStop(1, node.color + '0)');

        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();

        // Core
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = node.color + (alpha + 0.3) + ')';
        this.ctx.fill();
    }

    drawConnection(n1, n2, distance) {
        const maxDist = 150;
        const opacity = (1 - distance / maxDist) * 0.3;

        this.ctx.beginPath();
        this.ctx.moveTo(n1.x, n1.y);
        this.ctx.lineTo(n2.x, n2.y);
        this.ctx.strokeStyle = `rgba(0, 243, 255, ${opacity})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.stroke();
    }

    updateNodes() {
        for (let node of this.nodes) {
            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - node.x;
                const dy = this.mouse.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    node.vx -= (dx / dist) * force * 0.5;
                    node.vy -= (dy / dist) * force * 0.5;
                }
            }

            // Update position
            node.x += node.vx;
            node.y += node.vy;
            node.pulsePhase += node.pulseSpeed;

            // Damping
            node.vx *= 0.99;
            node.vy *= 0.99;

            // Boundary bounce
            if (node.x < 0 || node.x > this.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.height) node.vy *= -1;

            // Keep in bounds
            node.x = Math.max(0, Math.min(this.width, node.x));
            node.y = Math.max(0, Math.min(this.height, node.y));
        }
    }

    drawConnections() {
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    this.drawConnection(this.nodes[i], this.nodes[j], dist);
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Draw connections first (behind nodes)
        this.drawConnections();

        // Update and draw nodes
        this.updateNodes();
        for (let node of this.nodes) {
            this.drawNode(node);
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('neuron-canvas')) {
        window.neuronNetwork = new NeuronNetwork('neuron-canvas');
    }
});
