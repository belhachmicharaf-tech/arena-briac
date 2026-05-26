namespace SpriteKind {
    export const ennemy = SpriteKind.create()
    export const button = SpriteKind.create()
    export const PlaceHolder = SpriteKind.create()
    export const PlayerShot = SpriteKind.create()
    export const Attaque = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Attaque, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jeuDemarre) {
        if (player1.vy == 0) {
            player1.vy = -100
        }
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(ennemy2, effects.warmRadial, 500)
    sprites.destroy(statusbar)
    ennemyalive = false
})
function ennemy3 () {
    ennemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f c f . . . . 
        . . f f f f f f f c c c f . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f c c c c f f . . 
        . . f f c c c f f f f f c f . . 
        . f f f f f f f c c c f f f . . 
        . f f c 2 2 c b f 2 2 c c f . . 
        . f c c 2 d 2 1 f d d c f . . . 
        . . f c c c c c d d d f . . . . 
        . . . . f 2 d d c 4 c f . . . . 
        . . . . f c d d c 2 2 f . . . . 
        . . . f f f c c f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.ennemy)
    ennemy2.ay = 200
    tiles.placeOnTile(ennemy2, tiles.getTileLocation(2, 0))
    ennemyalive = true
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 1, 15)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.setOffsetPadding(60, 4)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(1, 15)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jeuDemarre) {
        animation.runImageAnimation(
        player1,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..cc.....fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        if (Math.abs(player1.x - ennemy2.x) <= 20) {
            statusbar.value = statusbar.value - 2
        }
    } else {
        B = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`heroWalkLeft`,
    100,
    true
    )
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
function ecrandemarrage () {
    logo = fancyText.create("DZ MAFIA STUDIO")
    logo.setPosition(80, 60)
    effects.smiles.startScreenEffect()
    pause(2000)
    effects.smiles.endScreenEffect()
    sprites.destroy(logo, effects.spray, 500)
    pause(500)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (player1.ay > 0 && player1.y < ennemy2.y) {
        player1.vy = -70
        statusbar.value += -30
    } else {
        info.changeLifeBy(-1)
    }
    pause(1000)
})
let projectile: Sprite = null
let gapright = 0
let gapleft = 0
let logo: fancyText.TextSprite = null
let ennemyalive = false
let statusbar: StatusBarSprite = null
let ennemy2: Sprite = null
let player1: Sprite = null
let jeuDemarre = false
let ligne3: TextSprite = null
let ligne2: TextSprite = null
let ligne1: TextSprite = null
let B = false
ecrandemarrage()
let menu = sprites.create(assets.image`Logo`, SpriteKind.PlaceHolder)
let jouer = textsprite.create("Appuyer sur A pour Jouer", 0, 1)
jouer.setPosition(80, 80)
let propos = textsprite.create("Appuyer sur B pour À Propos de nous", 0, 1)
propos.setPosition(100, 110)
let menuActif = true
while (menuActif) {
    B = false
    pauseUntil(() => controller.A.isPressed() || controller.right.isPressed() || B)
    if (B) {
        sprites.destroy(menu)
        sprites.destroy(jouer)
        sprites.destroy(propos)
        ligne1 = textsprite.create("Charaf et Said", 1, 15)
        ligne1.setPosition(80, 40)
        ligne2 = textsprite.create("Secondaire 5", 1, 15)
        ligne2.setPosition(80, 60)
        ligne3 = textsprite.create("Seminaire de Sherbrooke", 1, 15)
        ligne3.setPosition(80, 80)
        pause(300)
        pauseUntil(() => controller.B.isPressed())
        sprites.destroy(ligne1)
        sprites.destroy(ligne2)
        sprites.destroy(ligne3)
        menu = sprites.create(assets.image`Logo`, SpriteKind.PlaceHolder)
        jouer = textsprite.create("Appuyer sur A pour Jouer", 0, 1)
        jouer.setPosition(80, 80)
        propos = textsprite.create("Appuyer sur B pour A Propos de nous", 0, 1)
        propos.setPosition(100, 110)
    } else {
        menuActif = false
    }
}
sprites.destroy(menu)
sprites.destroy(jouer)
sprites.destroy(propos)
jeuDemarre = true
scene.setBackgroundImage(assets.image`castle`)
player1 = sprites.create(img`
    ..............ffffff....
    .............f2feeeeff..
    ............f222feeeeff.
    ............feeeeffeeef.
    ...........fe2222eeffff.
    ...........f2effff222ef.
    ...........fffeeefffffff
    ...........fee44fbe44eff
    ............feddf14d4eef
    .............fdddd4eeef.
    .............fe444eddf..
    .............ccc22eddf..
    .............cdc22fee...
    ............cddc4444f...
    ...........cddcfffff....
    ..........cddc..fff.....
    ..........cdc...........
    ..........cc............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(player1, 80, 0)
tiles.setCurrentTilemap(tilemap`level2`)
player1.ay = 200
scene.cameraFollowSprite(player1)
ennemy3()
game.onUpdate(function () {
    if (ennemyalive) {
        if (player1.x + 30 < ennemy2.x) {
            ennemy2.vx = -50
            ennemy2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f c f f f f f f f . . . 
                . . . f c c c f f f f f f f . . 
                . . . f f f f f f f f f f f . . 
                . . f f c c c c f f f f f f . . 
                . . f c f f f f f c c c f f . . 
                . . f f f c c c f f f f f f f . 
                . . f c c 2 2 f b c 2 2 c f f . 
                . . . f c d d f 1 2 d c c c f . 
                . . . . f d d d c c c c c f . . 
                . . . . f c 4 c d d 2 f . . . . 
                . . . . f 2 2 c d d c f . . . . 
                . . . f f 5 5 f c c f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `)
        } else if (player1.x - 30 > ennemy2.x) {
            ennemy2.vx = 50
            ennemy2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f f f f f f c f . . . . 
                . . f f f f f f f c c c f . . . 
                . . f f f f f f f f f f f . . . 
                . . f f f f f f c c c c f f . . 
                . . f f c c c f f f f f c f . . 
                . f f f f f f f c c c f f f . . 
                . f f c 2 2 c b f 2 2 c c f . . 
                . f c c 2 d 2 1 f d d c f . . . 
                . . f c c c c c d d d f . . . . 
                . . . . f 2 d d c 4 c f . . . . 
                . . . . f c d d c 2 2 f . . . . 
                . . . f f f c c f 5 5 f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f . . . f f f . . . . 
                `)
        } else {
            ennemy2.vx = 0
        }
    }
})
game.onUpdateInterval(2000, function () {
    gapleft = ennemy2.left - player1.right
    gapright = player1.left - ennemy2.right
    if (gapleft >= 0 && gapleft <= 50) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ennemy2, -50, 0)
    } else if (gapright >= 0 && gapright <= 50) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ennemy2, 50, 0)
    }
})
