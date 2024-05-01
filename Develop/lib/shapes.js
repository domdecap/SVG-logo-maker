// shape base class
class Shape {
    constructor(logoColor, textColor, text) {
            this.logoColor = logoColor,
            this.textColor = textColor,
            this.text = text
    }
    render() {
        return ''
    }
}


class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
        <text x='150' y='125' font size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
    }
}


class Triangle extends Shape {

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />
        <text x='150' y='125' font size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
    }
}


class Square extends Shape {

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.logoColor}" />
        <text x='150' y='125' font size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
    }
}

module.exports = { Circle, Triangle, Square };