ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu;
    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_MAX") //解压量子能量晶体_MAX
            .itemInputs("mindx:alloy_elector")
            .EUt(-1073741824)
            .circuit(0)
            .duration(1)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_OPV") //解压量子能量晶体_OpV
            .itemInputs("mindx:alloy_elector")
            .EUt(-536870912)
            .circuit(1)
            .duration(2)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_UXV") //解压量子能量晶体_UXV
            .itemInputs("mindx:alloy_elector")
            .EUt(-134217728)
            .circuit(2)
            .duration(8)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_UIV") //解压量子能量晶体_UIV
            .itemInputs("mindx:alloy_elector")
            .EUt(-33554432)
            .circuit(3)
            .duration(32)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_UEV") //解压量子能量晶体_UEV
            .itemInputs("mindx:alloy_elector")
            .EUt(-8388608)
            .circuit(4)
            .duration(128)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_UHV") //解压量子能量晶体_UHV
            .itemInputs("mindx:alloy_elector")
            .EUt(-2097152)
            .circuit(5)
            .duration(512)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_UV") //解压量子能量晶体_UV
            .itemInputs("mindx:alloy_elector")
            .EUt(-524288)
            .circuit(6)
            .duration(2048)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_ZPM") //解压量子能量晶体_ZPM
            .itemInputs("mindx:alloy_elector")
            .EUt(-131072)
            .circuit(7)
            .duration(8192)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_LUV") //解压量子能量晶体_LuV
            .itemInputs("mindx:alloy_elector")
            .EUt(-32768)
            .circuit(8)
            .duration(32768)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_IV") //解压量子能量晶体_IV
            .itemInputs("mindx:alloy_elector")
            .EUt(-8192)
            .circuit(9)
            .duration(131072)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_EV") //解压量子能量晶体_EV
            .itemInputs("mindx:alloy_elector")
            .EUt(-2048)
            .circuit(10)
            .duration(524288)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_HV") //解压量子能量晶体_HV
            .itemInputs("mindx:alloy_elector")
            .EUt(-512)
            .circuit(11)
            .duration(2097152)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_MV") //解压量子能量晶体_MV
            .itemInputs("mindx:alloy_elector")
            .EUt(-128)
            .circuit(12)
            .duration(8388608)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_LV") //解压量子能量晶体_LV
            .itemInputs("mindx:alloy_elector")
            .EUt(-32)
            .circuit(13)
            .duration(33554432)

    gtr.quantum_energy_decompressor("quantum_energy_decompressor_from_alloy_elector_ULV") //解压量子能量晶体_ULV
            .itemInputs("mindx:alloy_elector")
            .EUt(-8)
            .circuit(14)
            .duration(134217728)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_ULV") //液体转电力
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 8))
        .circuit(15)
        .duration(10)
        .EUt(-8)
    
    gtr.quantum_energy_decompressor("convert_eu_from_liquid_LV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 32))
        .circuit(16)
        .duration(10)
        .EUt(-32)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_MV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 128))
        .circuit(17)
        .duration(10)
        .EUt(-128)
        
    gtr.quantum_energy_decompressor("convert_eu_from_liquid_HV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 512))
        .circuit(18)
        .duration(10)
        .EUt(-512)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_EV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 2048))
        .circuit(19)
        .duration(10)
        .EUt(-2048)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_IV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 8192))
        .circuit(20)
        .duration(10)
        .EUt(-8192)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_LUV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 32768))
        .circuit(21)
        .duration(10)
        .EUt(-32768)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_ZPM")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 131072))
        .circuit(22)
        .duration(10)
        .EUt(-131072)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_UV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 524288))
        .circuit(23)
        .duration(10)
        .EUt(-524288)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_UHV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 2097152))
        .circuit(24)
        .duration(10)
        .EUt(-2097152)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_UEV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 8388608))
        .circuit(25)
        .duration(10)
        .EUt(-8388608)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_UIV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 33554432))
        .circuit(26)
        .duration(10)
        .EUt(-33554432)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_UMV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 134217728))
        .circuit(27)
        .duration(10)
        .EUt(-134217728)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_UXV")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 536870912))
        .circuit(28)
        .duration(10)
        .EUt(-536870912)

    gtr.quantum_energy_decompressor("convert_eu_from_liquid_MAX")
        .inputFluids(Fluid.of('gtceu:quantum_liquid_energy', 2147483647))
        .circuit(29)
        .duration(10)
        .EUt(-2147483647)

})