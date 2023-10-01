
export function randomizeColorClass(tag) {
    let colorClasses: Array = []
    if (!colorClasses[tag])
        colorClasses[tag] = generateRandomColorClass();
    return colorClasses[tag];
}

function generateRandomColorClass() {
    const colorClasses = [
        // 'badge-neutral',
        'badge-primary',
        'badge-secondary',
        'badge-success',
        'badge-danger',
        'badge-warning',
        'badge-accent',
        'badge-ghost',
    ];
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
}