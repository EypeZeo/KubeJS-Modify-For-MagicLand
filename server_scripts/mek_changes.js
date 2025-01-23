ServerEvents.recipes(event => {
    event.recipes.mekanism.enriching('mekanism:ingot_steel', 'mekanism:enriched_iron')
    event.remove({ output: 'mekanism:basic_control_circuit' }),
    event.remove({ output: 'mekanism:alloy_infused' }),
    event.remove({ output: 'mekanism:alloy_reinforced' }),
    event.remove({ output: 'mekanism:alloy_atomic' }),
    event.remove({ output: 'mekanism_extras:alloy_radiance' }),
    event.remove({ output: 'mekanism_extras:alloy_thermonuclear' }),
    event.remove({ output: 'mekanism_extras:alloy_shining' }),
    event.remove({ output: 'mekanism_extras:alloy_spectrum' }),

    event.recipes.mekanismMetallurgicInfusing(
        "mekanism:basic_control_circuit", // 输出物品
        "3x mekanism:ingot_osmium", //输入物品
        "160x mekanism:redstone" // 输入灌注类型及数量
);
    event.recipes.mekanismMetallurgicInfusing(
        "mekanism:alloy_infused", // 输出物品
        "enderio:conductive_alloy_ingot", //输入物品
        "240x mekanism:redstone" // 输入灌注类型及数量
    );
    event.recipes.mekanismMetallurgicInfusing(
        "mekanism:alloy_reinforced", // 输出物品
        "3x mekanism:alloy_infused", //输入物品
        "320x mekanism:diamond" // 输入灌注类型及数量
    );
    event.remove({id: 'mekanism:tier_installer/basic'})
    event.shaped('mekanism:basic_tier_installer', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:redstone_block',
        B: 'mekanism:basic_control_circuit',
        C: 'minecraft:redstone_block',
        D: 'mekanism:block_osmium'
    });
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.shaped('mekanism:metallurgic_infuser', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone_block',
        D: '#forge:storage_blocks/osmium'
    });
    event.remove({output: 'mekanism:steel_casing'})
    event.shaped('mekanism:steel_casing', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:ingots/steel',
        B: '#forge:ingots/cupronickel',
        C: '#forge:glass/silica',
        D: '#forge:ingots/osmium'
    });
    event.remove({output: 'mekanism:purification_chamber'})
    event.shaped('mekanism:purification_chamber', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: '#forge:storage_blocks/osmium',
        D: 'mekanism:enrichment_chamber'
    });
    event.remove({id: 'mekanism:factory/basic/infusing'})
    event.shaped('mekanism:basic_infusing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:metallurgic_infuser'
    });
    event.remove({id: 'mekanism:factory/advanced/infusing'})
    event.shaped('mekanism:advanced_infusing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_infusing_factory'
    });
    event.remove({id: 'mekanism:factory/elite/infusing'})
    event.shaped('mekanism:elite_infusing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_infusing_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/infusing'})
    event.shaped('mekanism:ultimate_infusing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_infusing_factory'
    });
    //锯木
    event.remove({id: 'mekanism:factory/basic/sawing'})
    event.shaped('mekanism:basic_sawing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:precision_sawmill'
    });
    event.remove({id: 'mekanism:factory/advanced/sawing'})
    event.shaped('mekanism:advanced_sawing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_sawing_factory'
    });
    event.remove({id: 'mekanism:factory/elite/sawing'})
    event.shaped('mekanism:elite_sawing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_sawing_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/sawing'})
    event.shaped('mekanism:ultimate_sawing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_sawing_factory'
    });
    //压射
    event.remove({id: 'mekanism:factory/basic/injecting'})
    event.shaped('mekanism:basic_injecting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:chemical_injection_chamber'
    });
    event.remove({id: 'mekanism:factory/advanced/injecting'})
    event.shaped('mekanism:advanced_injecting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_injecting_factory'
    });
    event.remove({id: 'mekanism:factory/elite/injecting'})
    event.shaped('mekanism:elite_injecting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_injecting_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/injecting'})
    event.shaped('mekanism:ultimate_injecting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_injecting_factory'
    });
    //提纯
    event.remove({id: 'mekanism:factory/basic/purifying'})
    event.shaped('mekanism:basic_purifying_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:purification_chamber'
    });
    event.remove({id: 'mekanism:factory/advanced/purifying'})
    event.shaped('mekanism:advanced_purifying_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_purifying_factory'
    });
    event.remove({id: 'mekanism:factory/elite/purifying'})
    event.shaped('mekanism:elite_purifying_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_purifying_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/purifying'})
    event.shaped('mekanism:ultimate_purifying_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_purifying_factory'
    });
    //融合
    event.remove({id: 'mekanism:factory/basic/combining'})
    event.shaped('mekanism:basic_combining_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:combiner'
    });
    event.remove({id: 'mekanism:factory/advanced/combining'})
    event.shaped('mekanism:advanced_combining_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_combining_factory'
    });
    event.remove({id: 'mekanism:factory/elite/combining'})
    event.shaped('mekanism:elite_combining_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_combining_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/combining'})
    event.shaped('mekanism:ultimate_combining_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_combining_factory'
    });
    //压缩
    event.remove({id: 'mekanism:factory/basic/compressing'})
    event.shaped('mekanism:basic_compressing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:osmium_compressor'
    });
    event.remove({id: 'mekanism:factory/advanced/compressing'})
    event.shaped('mekanism:advanced_compressing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_compressing_factory'
    });
    event.remove({id: 'mekanism:factory/elite/compressing'})
    event.shaped('mekanism:elite_compressing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_compressing_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/compressing'})
    event.shaped('mekanism:ultimate_compressing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_compressing_factory'
    });
    //粉碎
    event.remove({id: 'mekanism:factory/basic/crushing'})
    event.shaped('mekanism:basic_crushing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:crusher'
    });
    event.remove({id: 'mekanism:factory/advanced/crushing'})
    event.shaped('mekanism:advanced_crushing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_crushing_factory'
    });
    event.remove({id: 'mekanism:factory/elite/crushing'})
    event.shaped('mekanism:elite_crushing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_crushing_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/crushing'})
    event.shaped('mekanism:ultimate_crushing_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_crushing_factory'
    });
    //富集
    event.remove({id: 'mekanism:factory/basic/enriching'})
    event.shaped('mekanism:basic_enriching_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:enrichment_chamber'
    });
    event.remove({id: 'mekanism:factory/advanced/enriching'})
    event.shaped('mekanism:advanced_enriching_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_enriching_factory'
    });
    event.remove({id: 'mekanism:factory/elite/enriching'})
    event.shaped('mekanism:elite_enriching_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_enriching_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/enriching'})
    event.shaped('mekanism:ultimate_enriching_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_enriching_factory'
    });
    //熔炼
    event.remove({id: 'mekanism:factory/basic/smelting'})
    event.shaped('mekanism:basic_smelting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/iron',
        D: 'mekanism:energized_smelter'
    });
    event.remove({id: 'mekanism:factory/advanced/smelting'})
    event.shaped('mekanism:advanced_smelting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:basic_smelting_factory'
    });
    event.remove({id: 'mekanism:factory/elite/smelting'})
    event.shaped('mekanism:elite_smelting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mindx:compressed_gold_block',
        D: 'mekanism:advanced_smelting_factory'
    });
    event.remove({id: 'mekanism:factory/ultimate/smelting'})
    event.shaped('mekanism:ultimate_smelting_factory', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mindx:compressed_diamond_block',
        D: 'mekanism:elite_smelting_factory'
    });
    event.replaceInput({output: 'mekanism:ultimate_tier_installer'}, 'minecraft:diamond', 'mindx:compressed_diamond_block')
    event.replaceInput({output: 'mekanism:elite_tier_installer'}, 'minecraft:gold_ingot', 'mindx:compressed_gold_block')
    event.replaceInput({output: 'mekanism:advanced_tier_installer'}, 'mekanism:ingot_osmium', 'mekanism:block_osmium')
    event.replaceInput({output: 'mekanism:enrichment_chamber'}, 'minecraft:redstone', 'minecraft:redstone_block')
    event.replaceInput({output: 'mekanism:crusher'}, 'minecraft:redstone', 'minecraft:redstone_block')
    event.replaceInput({output: 'mekanism:energy_tablet'}, 'minecraft:redstone', 'minecraft:redstone_block')
    event.replaceInput({output: 'mekanism:energy_tablet'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'mekanism:energized_smelter'}, 'minecraft:redstone', 'minecraft:redstone_block')
    event.replaceInput({output: 'mekanism:electric_pump'}, 'mekanism:ingot_osmium', '#forge:storage_blocks/osmium')
    event.replaceInput({output: 'mekanism:precision_sawmill'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.replaceInput({output: 'mekanism:seismic_vibrator'}, '#forge:ingots/tin', '#forge:storage_blocks/tin')
    event.recipes.mekanism.dissolution({gas: 'mekanism:polonium', amount: 500}, {gas: 'mekanism_extras:polonium-208', amount: 10}, 'mekanism:ingot_uranium')
    event.recipes.mekanism.dissolution({gas: 'mekanismgenerators:tritium', amount: 1000}, {gas: 'mekanism:lithium', amount: 10}, 'mekanism:dust_lithium')
    event.recipes.mekanism.dissolution({gas: 'mekanism:polonium', amount: 500}, {gas: 'mekanism:nuclear_waste', amount: 10}, 'mekanism:ingot_uranium')
    event.remove({id: 'mekanism_extras:processing/lategame/polonium'})
    event.remove({id: 'mekanismgenerators:activating/tritium'})
    event.remove({id: 'mekanism:processing/lategame/polonium'})
    event.remove({output: 'mekanism:solar_neutron_activator'})
    event.remove({output: 'mekanism:alloy_atomic'})
    event.remove({output: 'mekanism:elite_control_circuit'})
    event.remove({output: 'mekanism:ultimate_control_circuit'})
    event.remove({output: 'mekanism_extras:absolute_control_circuit'})
    event.remove({output: 'mekanism_extras:supreme_control_circuit'})
    event.remove({output: 'mekanism_extras:cosmic_control_circuit'})
    event.remove({output: 'mekanism_extras:infinite_control_circuit'})
    event.remove({id: 'mekanism:processing/lategame/polonium_pellet/from_reaction'})
    event.remove({id: 'mekanism:processing/lategame/antimatter_pellet/from_gas'})
    
    event.recipes.mekanism.injecting('mindx:uranium-polonium_compounds', 'mekanism:ingot_uranium', {gas: 'mekanism:polonium', amount: 5}) //压射工厂制作铀钋混合物

    event.recipes.gtceu.arc_furnace('gtceu:polonrinium') //钋液体制作
        .itemInputs('mindx:uranium-polonium_compounds')
        .outputFluids(Fluid.of('gtceu:polonrinium', 1000))
        .duration(1600)
        .EUt(8192)
    
    event.recipes.gtceu.distillery('gtceu:antimatterium') //反物质液体制作
        .inputFluids(Fluid.of('gtceu:polonrinium', 2000))
        .outputFluids(Fluid.of('gtceu:antimatterium', 1000))
        .duration(6400)
        .EUt(16384)

    event.recipes.gtceu.chemical_reactor('mekanism:pellet_polonium') //钋靶丸
        .itemInputs('32x gtceu:antimony_trifluoride_dust','8x mekanism:ingot_uranium')
        .inputFluids(Fluid.of('gtceu:xenon', 3000))
        .itemOutputs('mekanism:pellet_polonium')
        .duration(3600)
        .EUt(128)

    event.recipes.gtceu.fluid_solidifier('mekanism:pellet_antimatter') //反物质靶丸
        .notConsumable('gtceu:nugget_casting_mold')
        .inputFluids(Fluid.of('gtceu:antimatterium', 1000))
        .itemOutputs('mekanism:pellet_antimatter')
        .duration(12800)
        .EUt(32768)

    //----------------------------------------------------------------Mekanism合金

    event.recipes.gtceu.alloy_smelter('mekanism:alloy_atomic')
        .itemInputs('2x mekanism:enriched_refined_obsidian','2x mekanism:alloy_reinforced')
        .itemOutputs('mekanism:alloy_atomic')
        .duration(100)
        .EUt(96)

    event.recipes.gtceu.assembler('mekanism_extras:alloy_radiance')
        .itemInputs('2x mekanism_extras:enriched_radiance','2x mekanism:alloy_atomic','ad_astra:desh_ingot')
        .itemOutputs('mekanism_extras:alloy_radiance')
        .duration(200)
        .EUt(MV)

    event.recipes.gtceu.assembler('mekanism_extras:alloy_thermonuclear')
        .itemInputs('2x mekanism_extras:enriched_thermonuclear','2x mekanism_extras:alloy_radiance','ad_astra:ostrum_ingot')
        .itemOutputs('mekanism_extras:alloy_thermonuclear')
        .duration(300)
        .EUt(HV)

    event.recipes.gtceu.assembler('mekanism_extras:alloy_shining')
        .itemInputs('2x #mekanism_extras:enriched/shining','2x mekanism_extras:alloy_thermonuclear','ad_astra:calorite_ingot')
        .itemOutputs('mekanism_extras:alloy_shining')
        .duration(400)
        .EUt(EV)

    event.recipes.gtceu.assembler('mekanism_extras:alloy_spectrum')
        .itemInputs('2x #mekanism_extras:enriched/spectrum','2x mekanism_extras:alloy_shining','ad_astra:etrium_ingot')
        .itemOutputs('mekanism_extras:alloy_spectrum')
        .duration(500)
        .EUt(IV)
    
    
    //----------------------------------------------------------------Mekanism处理器

    event.recipes.gtceu.alloy_smelter('mekanism:elite_control_circuit')
        .itemInputs('2x mekanism:alloy_reinforced','mekanism:advanced_control_circuit')
        .itemOutputs('mekanism:elite_control_circuit')
        .duration(100)
        .EUt(16)
    
    event.recipes.gtceu.alloy_smelter('mekanism:ultimate_control_circuit')
        .itemInputs('2x mekanism:alloy_atomic','mekanism:elite_control_circuit')
        .itemOutputs('mekanism:ultimate_control_circuit')
        .duration(600)
        .EUt(36)
    
    //----------------------------------------------------------------Mekanism_Extra处理器

    event.recipes.gtceu.circuit_assembler('mekanism_extras:absolute_control_circuit')
        .itemInputs('2x mekanism_extras:alloy_radiance','mekanism:ultimate_control_circuit','ad_astra:desh_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('mekanism_extras:absolute_control_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(MV)

    event.recipes.gtceu.circuit_assembler('mekanism_extras:supreme_control_circuit')
        .itemInputs('2x mekanism_extras:alloy_thermonuclear','mekanism_extras:absolute_control_circuit','ad_astra:desh_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('mekanism_extras:supreme_control_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(HV)
    
    event.recipes.gtceu.circuit_assembler('mekanism_extras:cosmic_control_circuit')
        .itemInputs('2x mekanism_extras:alloy_shining','mekanism_extras:supreme_control_circuit','ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('mekanism_extras:cosmic_control_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2000)
        .EUt(EV)

    event.recipes.gtceu.circuit_assembler('mekanism_extras:infinite_control_circuit')
        .itemInputs('2x mekanism_extras:alloy_spectrum','mekanism_extras:cosmic_control_circuit','ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('mekanism_extras:infinite_control_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(3000)
        .EUt(IV)

    //----------------------------------------------------------------Mekanism核聚变
    
    //移除原版配方

    event.remove({output: 'mekanismgenerators:fusion_reactor_frame'})
    event.remove({output: 'mekanismgenerators:fusion_reactor_controller'})
    event.remove({output: 'mekanismgenerators:fusion_reactor_logic_adapter'})
    event.remove({output: 'mekanismgenerators:fusion_reactor_port'})

    //添加新配方
    event.recipes.gtceu.assembler('mekanismgenerators:fusion_reactor_controller') //控制器     
        .itemInputs(
            '2x mekanism:ultimate_control_circuit',
            '4x mekanismgenerators:fusion_reactor_frame',
            'gtceu:luv_machine_hull',
            'mekanism:ultimate_chemical_tank',
            'gtceu:polonrinium_octal_cable'
        )
        .inputFluids(Fluid.of('gtceu:tin_alloy', 200))
        .itemOutputs('mekanismgenerators:fusion_reactor_controller')
        .duration(6400)
        .EUt(512)

    event.recipes.gtceu.assembler('mekanismgenerators:fusion_reactor_logic_adapter') //逻辑端口           
        .itemInputs(
            '4x mindx:compressed_redstone_block',
            'mekanismgenerators:fusion_reactor_frame'
        )
        .inputFluids(Fluid.of('gtceu:tin_alloy', 200))
        .itemOutputs('mekanismgenerators:fusion_reactor_logic_adapter')
        .duration(6400)
        .EUt(512)

    event.recipes.gtceu.assembler('mekanismgenerators:fusion_reactor_frame') //外壳           
        .itemInputs(
            '4x mekanism_extras:alloy_radiance',
            'mekanism:pellet_polonium',
            'gtceu:iv_machine_hull',
            'gtceu:polonrinium_ingot'
        )
        .inputFluids(Fluid.of('gtceu:tin_alloy', 200))
        .itemOutputs('mekanismgenerators:fusion_reactor_frame')
        .duration(6400)
        .EUt(512)

    event.recipes.gtceu.assembler('mekanismgenerators:fusion_reactor_port') //接口           
        .itemInputs(
            '4x mekanismgenerators:fusion_reactor_frame',
            'mekanism:ultimate_control_circuit'
        )
        .inputFluids(Fluid.of('gtceu:tin_alloy', 200))
        .itemOutputs('mekanismgenerators:fusion_reactor_port')
        .duration(6400)
        .EUt(512)

    //----------------------------------------------------------------Mekanism核裂变

    event.remove({output: 'mekanismgenerators:fission_reactor_casing'})

    event.shaped('mekanismgenerators:fission_reactor_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: '#forge:ingots/lead',
        C: 'gtceu:hv_machine_hull'
    });
    event.remove({output: 'mekanismgenerators:fission_reactor_port'})

    event.shaped('mekanismgenerators:fission_reactor_port', [
        ' B ',
        'BCB',
        ' B '
    ], {
        B: 'mekanismgenerators:fission_reactor_casing',
        C: 'mekanism:ultimate_control_circuit'
    });
    
    //----------------------------------------------------------------Mekanism_Extra硅岩反应堆

    //删除原有配方

    event.remove({id: 'mekanism_extras:naquadah_reactor/casing'}) //外壳
    event.remove({output: 'mekanism_extras:naquadah_reactor_controller'}) //控制器
    event.remove({output: 'mekanism_extras:naquadah_reactor_port'}) //端口
    event.remove({output: 'mekanism_extras:naquadah_reactor_logic_adapter'}) //逻辑适配器

    //添加新配方

    event.recipes.gtceu.assembler('mekanism_extras:naquadah_reactor_casing') //外壳           
        .itemInputs('mekanism_extras:supreme_control_circuit','8x #forge:storage_blocks/lead')
        .inputFluids(Fluid.of('gtceu:antimatterium', 20))
        .itemOutputs('mekanism_extras:naquadah_reactor_casing')
        .duration(8400)
        .EUt(32768)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('mekanism_extras:naquadah_reactor_controller') //控制器       
        .itemInputs(
            '2x mekanism_extras:cosmic_control_circuit',
            '5x mekanism_extras:naquadah_reactor_casing', 
            'mekanism_extras:absolute_chemical_tank',
            '#forge:glass_panes',
            '2x gtceu:antimatterium_plate'
        )
        .inputFluids(Fluid.of('gtceu:hsla_steel', 20))
        .itemOutputs('mekanism_extras:naquadah_reactor_controller')
        .duration(9600)
        .EUt(32768)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembler('mekanism_extras:naquadah_reactor_port') //端口           
        .itemInputs(
            'mekanism_extras:cosmic_control_circuit',
            '4x mekanism_extras:naquadah_reactor_casing'
        )
        .inputFluids(Fluid.of('gtceu:hsla_steel', 20))
        .itemOutputs('mekanism_extras:naquadah_reactor_port')
        .duration(9600)
        .EUt(32768)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembler('mekanism_extras:naquadah_reactor_logic_adapter') //逻辑适配器            
        .itemInputs(
            '4x minecraft:redstone',
            'mekanism_extras:naquadah_reactor_casing'
        )
        .inputFluids(Fluid.of('gtceu:hsla_steel', 20))
        .itemOutputs('mekanism_extras:naquadah_reactor_logic_adapter')
        .duration(9600)
        .EUt(32768)
        .cleanroom(CleanroomType.CLEANROOM)
    
    //----------------------------------------------------------------Mekanism MEKASUIT
    event.remove({ output: 'mekanism:mekasuit_helmet' })
    event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
    event.remove({ output: 'mekanism:mekasuit_pants' })
    event.remove({ output: 'mekanism:mekasuit_boots' })

    event.shaped('mekanism:mekasuit_helmet', [
        'ABA',
        'ADA',
        'CEC'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism_extras:absolute_control_circuit',
        C: 'mekanism:pellet_polonium',
        D: 'minecraft:netherite_helmet',
        E: 'mekanism_extras:absolute_induction_cell'
    })

    event.shaped('mekanism:mekasuit_bodyarmor', [
        'ABA',
        'ADA',
        'CEC'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism_extras:absolute_control_circuit',
        C: 'mekanism:pellet_polonium',
        D: 'minecraft:netherite_chestplate',
        E: 'mekanism_extras:absolute_induction_cell'
    })

    event.shaped('mekanism:mekasuit_pants', [
        'ABA',
        'ADA',
        'CEC'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism_extras:absolute_control_circuit',
        C: 'mekanism:pellet_polonium',
        D: 'minecraft:netherite_leggings',
        E: 'mekanism_extras:absolute_induction_cell'
    })

    event.shaped('mekanism:mekasuit_boots', [
        'ABA',
        'ADA',
        'CEC'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism_extras:absolute_control_circuit',
        C: 'mekanism:pellet_polonium',
        D: 'minecraft:netherite_boots',
        E: 'mekanism_extras:absolute_induction_cell'
    })

    event.remove({ output: 'mekanism:hdpe_sheet' })
    event.recipes.mekanism.enriching('mekanism:hdpe_sheet', '32x mekanism:hdpe_pellet') //高密度聚乙烯片
})