ServerEvents.recipes(event => {
    event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })

    event.recipes.gtceu.mixer('ad_astra:etrium_ingot') //埃特锭
    .itemInputs('ad_astra:desh_ingot', 'ad_astra:ostrum_ingot', 'ad_astra:calorite_ingot')
    .inputFluids(Fluid.of('minecraft:lava', 200))
    .itemOutputs('ad_astra:etrium_ingot')
    .duration(1000)
    .EUt(EV)

    event.recipes.gtceu.assembler('ad_astra:tier_1_rocket') //1阶火箭
    .itemInputs(
        'ad_astra:rocket_nose_cone', 
        '8x #forge:storage_blocks/steel', 
        '2x ad_astra:steel_tank', 
        '2x ad_astra:rocket_fin', 
        'ad_astra:steel_engine', 
        '6x gtceu:basic_integrated_circuit',
        '6x gtceu:lv_sensor')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
    .itemOutputs('ad_astra:tier_1_rocket')
    .duration(3000)
    .EUt(LV)

    event.recipes.gtceu.assembler('ad_astra:tier_2_rocket') //2阶火箭
    .itemInputs(
        'ad_astra:rocket_nose_cone', 
        '8x ad_astra:desh_block', 
        '2x ad_astra:desh_tank', 
        '2x ad_astra:rocket_fin', 
        'ad_astra:desh_engine', 
        '6x gtceu:good_electronic_circuit',
        '6x gtceu:mv_sensor')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
    .itemOutputs('ad_astra:tier_2_rocket')
    .duration(3000)
    .EUt(MV)

    event.recipes.gtceu.assembler('ad_astra:tier_3_rocket') //3阶火箭
    .itemInputs(
        'ad_astra:rocket_nose_cone', 
        '8x ad_astra:ostrum_block', 
        '2x ad_astra:ostrum_tank', 
        '2x ad_astra:rocket_fin', 
        'ad_astra:ostrum_engine', 
        '6x gtceu:micro_processor_assembly',
        '6x gtceu:hv_sensor')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
    .itemOutputs('ad_astra:tier_3_rocket')
    .duration(3000)
    .EUt(HV)

    event.recipes.gtceu.assembler('ad_astra:tier_4_rocket') //4阶火箭
    .itemInputs(
        'ad_astra:rocket_nose_cone', 
        '8x ad_astra:calorite_block', 
        '2x ad_astra:calorite_tank', 
        '2x ad_astra:rocket_fin', 
        'ad_astra:calorite_engine', 
        '6x gtceu:micro_processor_computer',
        '6x gtceu:ev_sensor')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
    .itemOutputs('ad_astra:tier_4_rocket')
    .duration(3000)
    .EUt(EV)
})