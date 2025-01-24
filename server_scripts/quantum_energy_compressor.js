ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu;
    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_MAX") //压缩成量子能量晶体_MAX
            .itemOutputs("mindx:alloy_elector")
            .EUt(1073741824)
            .circuit(0)
            .duration(1)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_OPV") //压缩成量子能量晶体_OpV
            .itemOutputs("mindx:alloy_elector")
            .EUt(536870912)
            .circuit(1)
            .duration(2)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_UXV") //压缩成量子能量晶体_UXV
            .itemOutputs("mindx:alloy_elector")
            .EUt(134217728)
            .circuit(2)
            .duration(8)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_UIV") //压缩成量子能量晶体_UIV
            .itemOutputs("mindx:alloy_elector")
            .EUt(33554432)
            .circuit(3)
            .duration(32)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_UEV") //压缩成量子能量晶体_UEV
            .itemOutputs("mindx:alloy_elector")
            .EUt(8388608)
            .circuit(4)
            .duration(128)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_UHV") //压缩成量子能量晶体_UHV
            .itemOutputs("mindx:alloy_elector")
            .EUt(2097152)
            .circuit(5)
            .duration(512)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_UV") //压缩成量子能量晶体_UV
            .itemOutputs("mindx:alloy_elector")
            .EUt(524288)
            .circuit(6)
            .duration(2048)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_ZPM") //压缩成量子能量晶体_ZPM
            .itemOutputs("mindx:alloy_elector")
            .EUt(131072)
            .circuit(7)
            .duration(8192)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_LUV") //压缩成量子能量晶体_LuV
            .itemOutputs("mindx:alloy_elector")
            .EUt(32768)
            .circuit(8)
            .duration(32768)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_IV") //压缩成量子能量晶体_IV
            .itemOutputs("mindx:alloy_elector")
            .EUt(8192)
            .circuit(9)
            .duration(131072)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_EV") //压缩成量子能量晶体_EV
            .itemOutputs("mindx:alloy_elector")
            .EUt(2048)
            .circuit(10)
            .duration(524288)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_HV") //压缩成量子能量晶体_HV
            .itemOutputs("mindx:alloy_elector")
            .EUt(512)
            .circuit(11)
            .duration(2097152)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_MV") //压缩成量子能量晶体_MV
            .itemOutputs("mindx:alloy_elector")
            .EUt(128)
            .circuit(12)
            .duration(8388608)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_LV") //压缩成量子能量晶体_LV
            .itemOutputs("mindx:alloy_elector")
            .EUt(32)
            .circuit(13)
            .duration(33554432)

    gtr.quantum_energy_compressor("quantum_energy_compressor_to_alloy_elector_ULV") //压缩成量子能量晶体_ULV
            .itemOutputs("mindx:alloy_elector")
            .EUt(8)
            .circuit(14)
            .duration(134217728)

})