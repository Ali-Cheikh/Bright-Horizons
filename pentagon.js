class PentagonBackground {
    constructor() {
        this.container = document.createElement('div');
        this.setupContainerStyles();
        document.body.prepend(this.container);
        this.minDistance = 200;
        this.setupKeyframeAnimation();
        this.generatePentagons();
        
        // Debounced resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.generatePentagons(), 250);
        });
    }

    setupContainerStyles() {
        Object.assign(this.container.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '150%',
            height: '150%',
            zIndex: '-1',
            overflow: 'hidden',
            pointerEvents: 'none'
        });
        this.container.className = 'pentagon-background';
    }

    setupKeyframeAnimation() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0) rotate(var(--rotation)); }
                50% { transform: translate(0, 30px) rotate(var(--rotation)); }
                100% { transform: translate(0, 0) rotate(var(--rotation)); }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    createPentagon(x, y) {
        const pentagon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const rotation = Math.random() * 360;
        const animationDuration = 3 + Math.random() * 2;
        
        // Apply styles directly to the pentagon
        Object.assign(pentagon.style, {
            position: 'absolute',
            width: '150px',      // Change this value
            height: '150px',     // Change this value
            opacity: '0.1',
            transition: 'all 0.5s ease',
            left: `${x}px`,
            top: `${y}px`
        });

        pentagon.setAttribute("class", "pentagon");
        pentagon.setAttribute("viewBox", "0 0 150 150");
        pentagon.style.setProperty('--rotation', `${rotation}deg`);
        pentagon.style.animation = `float ${animationDuration}s infinite ease-in-out`;

        const points = [];
        for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
            const pointX = 50 + 45 * Math.cos(angle);
            const pointY = 50 + 45 * Math.sin(angle);
            points.push(`${pointX},${pointY}`);
        }

        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", points.join(" "));
        polygon.setAttribute("fill", "#100fb9");
        pentagon.appendChild(polygon);

        return pentagon;
    }

    isValidPosition(x, y, positions) {
        return !positions.some(pos => {
            const dx = x - pos.x;
            const dy = y - pos.y;
            return Math.sqrt(dx * dx + dy * dy) < this.minDistance;
        });
    }

    generatePentagons() {
        this.container.innerHTML = '';
        const width = window.innerWidth;
        const height = window.innerHeight;
        const positions = [];
        const gridSize = 200;

        for (let x = -gridSize; x < width + gridSize; x += gridSize) {
            for (let y = -gridSize; y < height + gridSize; y += gridSize) {
                const offsetX = x + (Math.random() - 0.5) * gridSize;
                const offsetY = y + (Math.random() - 0.5) * gridSize;

                if (this.isValidPosition(offsetX, offsetY, positions)) {
                    positions.push({ x: offsetX, y: offsetY });
                    this.container.appendChild(this.createPentagon(offsetX, offsetY));
                }
            }
        }
    }
}