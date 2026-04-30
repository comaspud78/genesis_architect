// Progression & Banners

PlayerEvents.loggedIn(event => {
    const { player, level, server } = event
    if (!player.persistentData.hasStarterKit) {
        player.persistentData.hasStarterKit = true
        player.give('minecraft:wooden_pickaxe')
        player.give('8x minecraft:bread')
        player.give('minecraft:writable_book')
        player.runCommandSilent('/playsound minecraft:entity.player.levelup player @s ~ ~ ~ 1 1')
        player.tell(Text.gold('Welcome, Architect.')) 
        player.tell(Text.gold('The Void is rife with Potential, awaiting your Hand.'))
        player.tell(Text.gold('You begin with only the pickaxe in your hand.'))
        player.tell(Text.gold('From stone pebbles, create Genesis.'))
        player.tell(Text.gold('Good luck.'))
    }
})

ItemEvents.pickedUp('minecraft:cobblestone', event => {
    const { player } = event
    if (!player) return
    if (player.persistentData.hasStone) return
    player.persistentData.hasStone = true

    player.runCommandSilent(`title ${player.username} title {"text":"Age 1: Stonework","color":"gray"}`)
    player.runCommandSilent(`title ${player.username} subtitle {"text":"Foundational Development","color":"gray"}`)
})

ItemEvents.crafted('minecraft:oak_sapling', event => {
    const { player } = event
    if (!player) return
    if (player.persistentData.hasBiology) return
    player.persistentData.hasBiology = true
    player.runCommandSilent(`title ${player.username} title {"text":"Age 2: Biology","color":"green"}`)
    player.runCommandSilent(`title ${player.username} subtitle {"text":"Expansion and Experimentation","color":"gray"}`)
})

ItemEvents.pickedUp('create:andesite_casing', event => {
    const { player } = event
    if (!player) return
    if (player.persistentData.hasIndustry) return
    player.persistentData.hasIndustry = true

    player.runCommandSilent(`title ${player.username} title {"text":"Age 3: Industrialization","color":"red"}`)
    player.runCommandSilent(`title ${player.username} subtitle {"text":"Complexity and Optimization","color":"gray"}`)
})

ItemEvents.crafted('#architect:basic_eggs', event => {
    const { player } = event
    if (!player) return
    if (player.persistentData.hasSynthesis) return
    player.persistentData.hasSynthesis = true

    player.runCommandSilent(`title ${player.username} title {"text":"Age 4: Synthesis","color":"blue"}`)
    player.runCommandSilent(`title ${player.username} subtitle {"text":"Combination and Innovation","color":"gray"}`)
})

ItemEvents.crafted('architect:null_rune', event => {
    const { player } = event
    if (!player) return
    if (player.persistentData.hasMagic) return
    player.persistentData.hasMagic = true

    player.runCommandSilent(`title ${player.username} title {"text":"Age 5: Magic","color":"purple"}`)
    player.runCommandSilent(`title ${player.username} subtitle {"text":"Channeling and Mastery","color":"gray"}`)
})

ItemEvents.crafted('architect:blank_disc', event => {
    const { player } = event
    if (!player) return
    if (player.persistentData.hasMusic) return
    player.persistentData.hasMusic = true

    player.runCommandSilent(`title ${player.username} title {"text":"The Age of Music","color":"pink"}`)
    player.runCommandSilent(`title ${player.username} subtitle {"text":"Reflection and Reminiscence","color":"gray"}`)
})

BlockEvents.placed('architect:genesis_block', event => {
  const player = event.player
  const { block, level } = event
  if (!player) return

  // Prevent repeat triggering per player
  if (player.persistentData.genesisAcknowledged) return
  player.persistentData.genesisAcknowledged = true

  // Title
  player.runCommandSilent(
    `title ${player.username} title {"text":"God of Creation","color":"gold","bold":true}`
  )
  player.runCommandSilent(
    `title ${player.username} subtitle {"text":"The world is as You made it, Your Sovereignty.","color":"gray"}`
  )

  // Subtle sound
    level.playSound(null, block.pos, 'minecraft:block.amethyst_block.chime', 'blocks', 0.5, 0.8)
    level.playSound(null, block.pos, 'minecraft:block.sculk_shrieker.shriek', 'blocks', 0.5, 0.7)

  // Soft particle pulse
  const { x, y, z } = event.block
  player.runCommandSilent(
    `particle minecraft:enchant ${x + 0.5} ${y + 1.2} ${z + 0.5} 0.3 0.3 0.3 0.01 40 force`
  )
})