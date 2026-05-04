// Progression & Banners


// First-Time Log In
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
        player.tell(Text.gold('You begin with only the pickaxe in your hand and a book to note your discoveries.'))
        player.tell(Text.gold('From stone pebbles, create Genesis.'))
        player.tell(Text.gold('Good luck.'))
    }
})

ItemEvents.pickedUp(event => {
    const { player, item } = event
    
    // Age 1: Stonework
    if (item.id == 'minecraft:cobblestone' && !player.persistentData.hasStone) {
        player.persistentData.hasStone = true
        player.runCommandSilent(`title ${player.username} title {"text":"Age 1: Stonework","color":"gray"}`)
        player.runCommandSilent(`title ${player.username} subtitle {"text":"Foundational Development","color":"gray"}`)
        player.tell(Text.gold('Hmm... A nugget of potential.'))
    }

    // Age 3: Industry
    if (item.id == 'create:andesite_casing' && !player.persistentData.hasIndustry) {
        player.persistentData.hasIndustry = true
        player.runCommandSilent(`title ${player.username} title {"text":"Age 3: Industrialization","color":"red"}`)
        player.runCommandSilent(`title ${player.username} subtitle {"text":"Complexity and Optimization","color":"gray"}`)
        player.tell(Text.gold('Manufacture your own potential. Compress dimensions to achieve the highest levels.'))
    }

    // Age 5.5: Music
    if (item.id == 'architect:blank_disc' && !player.persistentData.hasMusic) {
        player.persistentData.hasMusic = true
        player.runCommandSilent(`title ${player.username} title {"text":"The Age of Music","color":"pink"}`)
        player.runCommandSilent(`title ${player.username} subtitle {"text":"Reflection and Reminiscence","color":"gray"}`)
        player.tell(Text.gold('Create the soundtrack of your potential. Share with the world the song of your creation.'))
    }
})

ItemEvents.crafted(event => {
    const { player, item } = event

    // Last Architect's Journal
    if (item.id == 'architect:stone_pebble' && !player.persistentData.hasJournal) {
        player.persistentData.hasJournal = true
        player.give(Item.of('minecraft:written_book', {
            title: "Last Architect's Journal",
            author: "The One Before",
            pages: [
                "Day 1 - This world can be broken down into its constituent parts and reformed into something else. The pebbles I ground up from the cobblestones I pulled out of the ground molded easily into a brittle branch, and when I bundled many of them up together I made some facsimile of wood. The first thing I felt truly proud of was my workbench, my very own station at which I could leave my tools to rest and come back to. I felt like my prowess had expanded... if I had to quantify it, I'd say more than doubly so. I feel alive, even on this dead world.",
                "Day 14 - By the Void that surrounds me, I've done it. I created life. By softening the rock and planting the branches into the, quote unquote, 'soil', I watched the first breath of fresh air grow before my very eyes. A tree! I grew a tree out of rocks! I GREW A TREE OUT OF ROCKS!",
                "Page 37 - When combining materials, I discovered a new alloy that I've dubbed simply 'Andesite Alloy', which can be made by molding nuggets of iron into cubed andesite. When applied to a log stripped of its bark, this alloy makes the wood much sturdier, and capable of much greater things. I have constructed a machine made of this alloy-treated wood that is capable of applying an impressive amount of force; I've accidentally flattened some of my iron ingots, making them... unusable for the moment, but I'll find something to jerry-rig them to.",
                "Page 102 - I am a god among.... nobody. I am so alone. Except... I'm not anymore. I made... I brought to life... Am I a father? Regardless of my nomenclature as a being, I made a cow. It breathes, it moos, it walks around and eats things. It's a cow. And I made it. I reverse engineered a cow out of mushrooms I made from crushing up brown pebbles, and I placed that cow into an egg to incubate, and now that cow just... exists. She's here. And she's mooing.",
                "Page 127 - The physics of this world no longer apply to me. I have broken my limits, and achieved new levels of greatness. I am not fast, nor strong; I am strength, and I am speed. This world bends to my will - because I am the one who made it all.",
                "Page 130 - The cacophonous zoo of machinery and anatomy can finally be drowned out. The songs, the beautiful melodies... I am ecstatic. The dancing of the notes, the harmonies... Each one reminds me of something I made.",
                "Page 196 - I am Genesis. I am the Architect. What exists here only exists because I created it, and everything exists here. There is nothing left to create; now, I rewrite the rules, and begin again."
            ]
        }))
    }

    // Age 2: Biology
    if (item.id == 'minecraft:oak_sapling' && !player.persistentData.hasBiology) {
        player.persistentData.hasBiology = true
        player.runCommandSilent(`title ${player.username} title {"text":"Age 2: Biology","color":"green"}`)
        player.runCommandSilent(`title ${player.username} subtitle {"text":"Expansion and Experimentation","color":"gray"}`)
        player.tell(Text.gold('Grow your potential beyond its current limits. Achieve mastery of cultivation and harvesting.'))
    }

    // Age 4: Synthesis
    if (item.id == 'architect:basic_spawn_egg' && !player.persistentData.hasSynthesis) {
        player.persistentData.hasSynthesis = true
        player.runCommandSilent(`title ${player.username} title {"text":"Age 4: Synthesis","color":"blue"}`)
        player.runCommandSilent(`title ${player.username} subtitle {"text":"Combination and Innovation","color":"gray"}`)
        player.tell(Text.gold('The world is your canvas, and life is your brush. Paint your potential across this universe.'))
    }

    // Age 5: Magic
    if (item.id == 'architect:null_rune' && !player.persistentData.hasMagic) {
        player.persistentData.hasMagic = true
        player.runCommandSilent(`title ${player.username} title {"text":"Age 5: Magic","color":"purple"}`)
        player.runCommandSilent(`title ${player.username} subtitle {"text":"Channeling and Mastery","color":"gray"}`)
        player.tell(Text.gold('Enhance your potential beyond their physical limits. Rise above the world, and claim it.'))
    }
})

// Age 6: Genesis
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
