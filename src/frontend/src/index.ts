import Phaser from 'phaser'

class MyGame extends Phaser.Scene {
    constructor() {
        super('p')
    }

    preload() {
        this.load.image('logo', './logo.png')
    }

    create() {
        const logo = this.add.image(400, 150, 'logo')

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1,
        })
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame,
}

const myfunction = (a: string, b: string) => {
    const d = a + b
    for (let i = 0; i < 10; i += 1) {
        console.log(d)
    }
    return 10
}
const myName = myfunction('Seb', 'Thuillier')
console.log(myName)

export default new Phaser.Game(config)
