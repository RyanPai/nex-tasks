function solution(A,B) {
    const start = A[0];

    const next = new Map();
    for(let i = 0; i< A.length; i++) {
        if(next.has(A[i])) return false;
        next.set(A[i], B[i])
    }

    const points = new Set(A);
    let current = start

    while(points.has(current)) {
        points.delete(current)
        current = next.get(current)
        if (current === undefined) return false
    }

    return points.size === 0 && current === start;
}

export default solution;