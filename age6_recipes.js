// Age 6 Recipes

ServerEvents.recipes(event => {

    // 1x Genesis Tear
    event.shaped('architect:genesis_tear', [
        'ENE',
        'DGD',
        'NDN'
    ], {
        E: 'architect:greater_spawn_egg',
        N: 'minecraft:netherite_ingot',
        D: 'minecraft:diamond',
        G: 'minecraft:ghast_tear'
    })

    // 1x Genesis Block
    event.shaped('architect:genesis_block', [
        'YBT',
        'EGS',
        'IDN'
    ], {
        Y: 'minecraft:ender_eye',
        B: Item.of('minecraft:enchanted_book').weakNBT(),
        T: 'architect:genesis_tear',
        E: 'minecraft:elytra',
        G: 'architect:greater_spawn_egg',
        S: 'minecraft:nether_star',
        I: 'minecraft:iron_nugget',
        D: 'minecraft:diamond',
        N: 'minecraft:netherite_block'
    })

    // 9x Bedrock
    event.shaped('9x minecraft:bedrock', [
        'EOE',
        'GNG',
        'EBE'
    ], {
        E: 'minecraft:end_portal_frame',
        O: 'minecraft:obsidian',
        G: 'architect:genesis_tear',
        N: 'minecraft:netherite_block',
        B: 'architect:genesis_block'
    })    
        
    // Ender Sword
    event.shaped('architect:ender_arm', [
        ' OE',
        'COO',
        'BC '
    ], {
        E: 'minecraft:ender_eye',
        C: 'minecraft:chorus_fruit',
        O: 'minecraft:obsidian',
        B: 'minecraft:bedrock'
    })

    // Ender Pick
    event.shaped('architect:ender_hand', [
        'EOC',
        ' OO',
        'B E'
    ], {
        O: 'minecraft:obsidian',
        E: 'minecraft:ender_eye',
        C: 'minecraft:chorus_fruit',
        B: 'minecraft:bedrock'
    })

})