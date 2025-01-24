ServerEvents.recipes(event => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const gtr = event.recipes.gtceu;
    
    const rawMaterials = [
        "minecraft:diamond",
        "minecraft:emerald",
        "minecraft:lapis_lazuli",
        "minecraft:coal",
        "minecraft:ancient_debris",
        "minecraft:quartz",
        "minecraft:amethyst_shard",
        "minecraft:redstone",
        "gtceu:raw_talc",
        "gtceu:raw_sphalerite",
        "gtceu:raw_tin",
        "gtceu:raw_glauconite_sand",
        "gtceu:raw_garnet_sand",
        "gtceu:raw_mica",
        "minecraft:raw_copper",
        "gtceu:raw_pyrite",
        "gtceu:raw_zeolite",
        "gtceu:raw_sulfur",
        "gtceu:raw_alunite",
        "thermal:raw_lead",
        "gtceu:raw_topaz",
        "gtceu:raw_apatite",
        "gtceu:raw_grossular",
        "bigreactors:raw_yellorium",
        "ad_astra:raw_ostrum",
        "gtceu:raw_fullers_earth",
        "gtceu:raw_yellow_limonite",
        "gtceu:raw_scheelite",
        "gtceu:raw_green_sapphire",
        "minecraft:raw_gold",
        "gtceu:raw_basaltic_mineral_sand",
        "gtceu:raw_molybdenum",
        "gtceu:raw_trona",
        "gtceu:raw_chalcocite",
        "gtceu:raw_spessartine",
        "gtceu:raw_certus_quartz",
        "gtceu:raw_vanadium_magnetite",
        "gtceu:raw_cinnabar",
        "gtceu:raw_calcite",
        "mekanism:raw_tin",
        "gtceu:raw_lepidolite",
        "gtceu:raw_lithium",
        "gtceu:raw_tricalcium_phosphate",
        "gtceu:raw_opal",
        "minecraft:raw_iron",
        "mekanism:raw_osmium",
        "gtceu:raw_quartzite",
        "ad_astra:raw_desh",
        "gtceu:raw_platinum",
        "gtceu:raw_redstone",
        "gtceu:raw_soapstone",
        "gtceu:raw_ruby",
        "gtceu:raw_sodalite",
        "gtceu:raw_sapphire",
        "gtceu:raw_saltpeter",
        "gtceu:raw_cassiterite",
        "gtceu:raw_goethite",
        "gtceu:raw_magnesite",
        "gtceu:raw_almandine",
        "gtceu:raw_silver",
        "gtceu:raw_neodymium",
        "gtceu:raw_pentlandite",
        "gtceu:raw_bastnasite",
        "gtceu:raw_nether_quartz",
        "gtceu:raw_tetrahedrite",
        "thermal:raw_nickel",
        "ad_astra:raw_calorite",
        "gtceu:raw_cobaltite",
        "gtceu:raw_lapis",
        "gtceu:raw_ilmenite",
        "gtceu:raw_pitchblende",
        "mekanism_extras:raw_naquadah",
        "gtceu:raw_lead",
        "gtceu:raw_cobalt",
        "gtceu:raw_thorium",
        "gtceu:raw_realgar",
        "gtceu:raw_salt",
        "gtceu:raw_olivine",
        "gtceu:raw_molybdenite",
        "gtceu:raw_barite",
        "gtceu:raw_chalcopyrite",
        "gtceu:raw_red_garnet",
        "gtceu:raw_coal",
        "gtceu:raw_blue_topaz",
        "gtceu:raw_pyrolusite",
        "gtceu:raw_tungstate",
        "gtceu:raw_electrotine",
        "gtceu:raw_gypsum",
        "gtceu:raw_powellite",
        "gtceu:raw_spodumene",
        "thermal:raw_tin",
        "gtceu:raw_pyrope",
        "gtceu:raw_wulfenite",
        "gtceu:raw_chromite",
        "gtceu:raw_cooperite",
        "gtceu:raw_amethyst",
        "gtceu:raw_kyanite",
        "gtceu:raw_uraninite",
        "gtceu:raw_plutonium",
        "gtceu:raw_aluminium",
        "gtceu:raw_lazurite",
        "gtceu:raw_yellow_garnet",
        "gtceu:raw_oilsands",
        "gtceu:raw_bentonite",
        "gtceu:raw_diamond",
        "gtceu:raw_bornite",
        "gtceu:raw_rock_salt",
        "mekanism:raw_lead",
        "gtceu:raw_hematite",
        "gtceu:raw_emerald",
        "gtceu:raw_palladium",
        "gtceu:raw_magnetite",
        "gtceu:raw_nickel",
        "gtceu:raw_pyrochlore",
        "gtceu:raw_asbestos",
        "gtceu:raw_galena",
        "mekanism:raw_uranium",
        "gtceu:raw_malachite",
        "gtceu:raw_garnierite",
        "create:raw_zinc",
        "gtceu:raw_tantalite",
        "gtceu:raw_diatomite",
        "gtceu:raw_granitic_mineral_sand",
        "gtceu:raw_bauxite",
        "gtceu:raw_monazite",
        "gtceu:raw_cassiterite_sand",
        "gtceu:raw_graphite",
        "gtceu:raw_stibnite",
        "gtceu:raw_naquadah",
        "gtceu:raw_pollucite",
        "thermal:raw_silver",
        "gtceu:raw_beryllium"
    ];
    
    rawMaterials.forEach((rawMaterials) => {
        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "ULV") // ULV级别
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .outputFluids(Fluid.of('gtceu:steam', 1000))
            .itemInputs(rawMaterials)
            .itemOutputs("2x " + rawMaterials)
            .EUt(8)
            .circuit(0)
            .duration(400)

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "LV") // LV级别
            .inputFluids(Fluid.of('minecraft:water', 2000))
            .outputFluids(Fluid.of('gtceu:steam', 2000))
            .itemInputs(rawMaterials)
            .itemOutputs("3x " + rawMaterials)
            .EUt(32)
            .circuit(1)
            .duration(200)

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "MV") // MV级别
            .inputFluids(Fluid.of('minecraft:water', 3000))
            .outputFluids(Fluid.of('gtceu:steam', 3000))
            .itemInputs(rawMaterials)
            .itemOutputs("5x " + rawMaterials)
            .EUt(128)
            .circuit(2)
            .duration(100);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "HV") // HV级别
            .inputFluids(Fluid.of('minecraft:water', 4000))
            .outputFluids(Fluid.of('gtceu:steam', 4000))
            .itemInputs(rawMaterials)
            .itemOutputs("8x " + rawMaterials)
            .EUt(512)
            .circuit(3)
            .duration(80);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "EV") // EV级别
            .inputFluids(Fluid.of('minecraft:water', 5000))
            .outputFluids(Fluid.of('gtceu:steam', 5000))
            .itemInputs(rawMaterials)
            .itemOutputs("10x " + rawMaterials)
            .EUt(2048)
            .circuit(4)
            .duration(60);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "IV") // IV级别
            .inputFluids(Fluid.of('minecraft:water', 6000))
            .outputFluids(Fluid.of('gtceu:steam', 6000))
            .itemInputs(rawMaterials)
            .itemOutputs("12x " + rawMaterials)
            .EUt(8192)
            .circuit(5)
            .duration(50);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "LuV") // LuV级别
            .inputFluids(Fluid.of('minecraft:water', 7000))
            .outputFluids(Fluid.of('gtceu:steam', 7000))
            .itemInputs(rawMaterials)
            .itemOutputs("15x " + rawMaterials)
            .EUt(32768)
            .circuit(6)
            .duration(45);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "ZPM") // ZPM级别
            .inputFluids(Fluid.of('minecraft:water', 8000))
            .outputFluids(Fluid.of('gtceu:steam', 8000))
            .itemInputs(rawMaterials)
            .itemOutputs("18x " + rawMaterials)
            .EUt(131072)
            .circuit(7)
            .duration(40);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "UV") // UV级别
            .inputFluids(Fluid.of('minecraft:water', 9000))
            .outputFluids(Fluid.of('gtceu:steam', 9000))
            .itemInputs(rawMaterials)
            .itemOutputs("20x " + rawMaterials)
            .EUt(524288)
            .circuit(8)
            .duration(35);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "UHV") // UHV级别
            .inputFluids(Fluid.of('minecraft:water', 10000))
            .outputFluids(Fluid.of('gtceu:steam', 10000))
            .itemInputs(rawMaterials)
            .itemOutputs("30x " + rawMaterials)
            .EUt(2097152)
            .circuit(9)
            .duration(30);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "UEV") // UEV级别
            .inputFluids(Fluid.of('minecraft:water', 11000))
            .outputFluids(Fluid.of('gtceu:steam', 11000))
            .itemInputs(rawMaterials)
            .itemOutputs("50x " + rawMaterials)
            .EUt(8388608)
            .circuit(10)
            .duration(25);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "UIV") // UIV级别
            .inputFluids(Fluid.of('minecraft:water', 12000))
            .outputFluids(Fluid.of('gtceu:steam', 12000))
            .itemInputs(rawMaterials)
            .itemOutputs("80x " + rawMaterials)
            .EUt(33554432)
            .circuit(11)
            .duration(20);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "UXV") // UXV级别
            .inputFluids(Fluid.of('minecraft:water', 13000))
            .outputFluids(Fluid.of('gtceu:steam', 13000))
            .itemInputs(rawMaterials)
            .itemOutputs("100x " + rawMaterials)
            .EUt(134217728)
            .circuit(12)
            .duration(15);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "OpV") // OpV级别
            .inputFluids(Fluid.of('minecraft:water', 14000))
            .outputFluids(Fluid.of('gtceu:steam', 14000))
            .itemInputs(rawMaterials)
            .itemOutputs("120x " + rawMaterials)
            .EUt(536870912)
            .circuit(13)
            .duration(10);

        gtr.void_miner("nether_void_ore_" + rawMaterials + "_" + "MAX") // MAX级别
            .inputFluids(Fluid.of('minecraft:water', 15000))
            .outputFluids(Fluid.of('gtceu:steam', 15000))
            .itemInputs(rawMaterials)
            .itemOutputs("150x " + rawMaterials)
            .EUt(2147483647)
            .circuit(14)
            .duration(5);

    })
})