ServerEvents.recipes(event => {
    event.shaped('create:creative_blaze_cake', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:cake',
        B: 'mindx:magic_star'
    });
    event.shaped('create:creative_motor', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'create:shaft',
        B: 'mindx:magic_star',
        C: 'minecraft:nether_star'
    });
    event.shaped('botania:creative_pool', [
        '   ',
        'ABA',
        'ACA'
    ], {
        A: 'mindx:extreme_compressed_diamond_block',
        B: 'mindx:magic_star',
        C: 'minecraft:nether_star'
    });
    event.shaped(Item.of('mekanism:creative_chemical_tank', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:9223372036854775807L,gasName:"mekanismgenerators:fusion_fuel"}}]}}'), [
        'ACA',
        'ABA',
        'ACA'
    ], {
        A: 'mekanism_extras:absolute_chemical_tank',
        B: 'mindx:magic_star',
        C: 'mekanism:pellet_antimatter'
    });
    event.shaped('pneumaticcraft:creative_compressed_iron_block', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'mindx:extreme_compressed_iron_block',
        B: 'mindx:magic_star'
    });
    event.shaped('pneumaticcraft:creative_compressor', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'mindx:extreme_compressed_gold_block',
        B: 'mindx:magic_star',
        C: 'mindx:extreme_compressed_emerald_block'
    });
})