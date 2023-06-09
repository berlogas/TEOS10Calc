/**
    @Author  Suman Bogati (sumanbogati@gmail.com)
	http://jsgyan.blogspot.in/
    https://github.com/sumanbogati
*/
var en = {
	htmltitle : "Oceanography calculator",
	htmlheader1 : "Thermodynamics and Equation of State of Seawater Calculator ·",
	htmlheader2 : "Oceanography calculator · EOS-80 · TEOS-10 ·",
	htmlfname : "Select file",
	htmlvarsheader : "Calculated parameters and their headers",
	htmlvars1 : "EOS-80",
	htmlvars2 : "Salinity and Temperature",
	htmlvars3 : "Density and Enthalpy",
	htmlvars4 : "Thermodynamics",
	htmldatasheader : "Initial data from the loaded table and calculated",
	htmlilato : "Latitude",
	htmlilono : "Longitude",
	htmlcopyright : "Berezhinskii O.",
	htmltotallines  : "Total lines - ",
	htmlwarning1  : "The file is not selected or its format is not supported!",
	htmlwarning2  : "No parameters selected for calculation!", 
	htmlwarning3  : "Data required for calculation not selected!",
	htmlwarning5  : "Calculation done", 
	diagramtitle  : "Diagrams",
	diagramtitlep  : "Diagrams",
	tsdiagramtitle  : "T-S diagram",
	diagramstitle  : "Salinity <i>S</i><sub>p</sub>, g/kg",
	diagramttitle  : "Temperature <i>t</i> ,°C",
	diagramptitle  : "Pressure <i>p</i>, dbar",
	diagramdtitle  : "Pressure <i>p</i>, dbar",
	diagramxtitle  : "x-axis",
	diagramxntitle  : "x-axis",
	diagramytitle  : "y-axis",
	dddiagramtitle  : "Level charts",
	ccdiagramtitle  : "Custom chart",

	temperature : "Temperature <i>t</i> ,°C",
    ptemperature : "Potential Temperature <i>θ</i>,°C",
    ctemperature : "Conservative Temperature Θ,°C",
    salinity : "Practical Salinity <i>S</i><sub>p</sub> ",
    asalinity : "Absolute Salinity <i>S</i><sub>A</sub>, g/kg ",
    psalinity : "Preformed Salinity <i>S</i><sub>*</sub>, g/kg ",
    rsalinity : "Reference Salinity <i>S</i><sub>R</sub>, g/kg ",
    pressure : "Pressure <i>p</i>, dbar",
    depth : "Depth h, m",
    conductivity : "Conductivity <i>C</i>, mS/cm",
    rconductivity : "Conductivity ratio <i>R</i>",
    latitude : "Latitude <i>φ</i>, DD°MM'SS.s N|S",
    longitude: "Longitude <i>λ</i>, DDD°MM'SS.s E|W",
    pressure1 : `Pressure <i>p</i>, dbar`,
    depth : "Depth h, m",
    density : "Density <i>ρ</i>, kg/m<sup><i>3</i></sup><font size='-2'>(-1000)</font>",
    salinity1 : "Practical Salinity (<i>C</i>) <i>S</i><sub>p</sub>",
    salinity2 : "Practical Salinity (<i>R</i>) <i>S</i><sub>p</sub>",
    ptemperature1 : "Potential Temperature <i>θ</i>, °C",
    soundspeed : "Sound speed <i>c</i>, m/s",
    freezingpoint : "Freezing point <i>t</i><sub>f</sub>, °C",
    // latitude : "Latitude <i>φ</i>, DD.ddd",
    // longitude : "Longitude <i>λ</i>, DDD.ddd",
    coriolis1 : "Coriolis frequency, 10<sup>-4</sup> s<sup>-1</sup>",
    coriolis2 : "Coriolis period, hours",
    asalinity1 : "Absolute Salinity (<i>S</i><sub>p</sub>) <i>S</i><sub>A</sub>, g/kg ",
    psalinity1 : "Preformed Salinity (Θ) <i>S</i><sub>*</sub>, g/kg ",
    ctemperature1 : "Conservative Temperature (t) Θ, °C ",
    deltaSA_from_SP : "Absolute Salinity Anomaly (<i>S</i><sub>p</sub>) <i>δS</i><sub>A</sub>, g/kg  ",
    rsalinity1 : "Reference Salinity (<i>S</i><sub>p</sub>) <i>S</i><sub>R</sub>, g/kg  " ,
    salinity3 : "Practical Salinity (<i>S</i><sub>R</sub>) <i>S</i><sub>p</sub>",
    salinity4 : "Practical Salinity (<i>S</i><sub>A</sub>) <i>S</i><sub>p</sub>",
    Sstar_from_SA : "Preformed Salinity (<i>S</i><sub>A</sub>) <i>S</i><sub>*</sub>, g/kg",
    salinity5 : "Practical Salinity (<i>S</i><sub>*</sub>) <i>S</i><sub>p</sub>, g/kg",
    asalinity2 : "Absolute Salinity (<i>S</i><sub>*</sub>) <i>S</i><sub>A</sub>, g/kg",
    CT_from_pt : "Conservative Temperature (<i>θ</i>) Θ, °C",
    pt_from_CT : "Potential Temperature (Θ) <i>θ</i>, °C",
    pt0_from_t : "Potential Temperature (p = 0 dbar) <i>θ</i>, °C",
    rho : "Density <i>ρ</i>, kg/m<sup><i>3</i></sup>",
    alpha : "Thermal expansion coefficient (Θ) <i>α</i><sup>Θ</sup>, 1/K",
    beta : "Saline contraction coefficient (Θ) <i>β</i><sup>Θ</sup>, kg/g",
    specvol : "Specific volume <i>v</i>, m<sup><i>3</i></sup>/kg",
    sound_speed : "Sound speed <i>c</i>, m/s",
    internal_energy : "Specific internal energy <i>u</i>, J/kg ",
    enthalpy : "Specific enthalpy <i>h</i>, J/kg ",
    dynamic_enthalpy : "Dynamic enthalpy <i>h-h</i><sup>0</sup>, J/kg ",
    CT_freezing : "Freezing point (Θ) <i>Θ</i><sub>f</sub>, °C",
    t_freezing : "Freezing point (t) <i>t</i><sub>f</sub>, °C",
    latentheat_melting : "Latent heat of melting <i>L</i><sup>WI</sup><sub><i>p</i></sub>, J/kg ",
    latentheat_evap_ct : "Latent heat of evaporation(Θ) <i>L</i><sup>VW</sup><sub><i>p</i></sub>(<i>Θ</i>), J/kg ",
    latentheat_evap_t : "Latent heat of evaporation(t) <i>L</i><sup>VW</sup><sub><i>p</i></sub>(<i>t</i>), J/kg ",
    rho_t_exact : "In-situ density <i>ρ</i>, kg/m<sup><i>3</i></sup>",
    pot_rho_t_exact : "Potential density <i>ρ</i><sup><i>θ</i></sup>, kg/m<sup><i>3</i></sup>",
    alpha_wrt_t_exact : "Thermal expansion coefficient(t) <i>α</i><sup>t</sup>, 1/K ",
    beta_const_t_exact : "Saline contraction coefficient(t) <i>β</i><sup>t</sup>, kg/g  ",
    specvol_t_exact : "Specific volume <i>v</i>, m<sup><i>3</i></sup>/kg",
    sound_speed_t_exact : "Sound speed <i>c</i>, m/s",
    kappa_t_exact : "Isentropic compressibility <i>κ</i>, 1/Pa",
    enthalpy_t_exact : "Specific enthalpy <i>h</i>, J/kg ",
    entropy_from_t : "Specific entropy <i>η</i>, J/(kg*K) ",
    cp_t_exact : "Isobaric heat capacity <i>c</i><sub><i>p</i></sub>, J/(kg*K) ",

    pressure1_description:`Sea pressure from depth in meters. <br>Hydrostatic pressure at any height below the water surface is calculated by P=hdg where h is the height below the open water surface, d is the density of water and g is the acceleration due to gravity.`,
    depth_description:`Depth in meters from pressure in dbars. <br>Calculate the depth below the surface of water at which the pressure due to the weight of the water equals 1.00 atm. We begin by solving the equationP=hρg P = h ρ g for depthh: h= Pρg.`,
    density_description:`Density from salinity, temperature, and pressure. <br>Sea water density is the in-situ density (not the potential density). If 1000 kg m-3 is subtracted, the standard name "sea_water_sigma_t" should be chosen instead. "change_over_time_in_X" means change in a quantity X over a time-interval, which should be defined by the bounds of the time coordinate.`,
    salinity1_description:`Practical Salinity from temperature, conductivity, and pressure, the input values of conductivity need to be in units of mS/cm (not S/m)!. <br>Practical Salinity, S_P, is a determination of the salinity of sea water, based on its electrical conductance. The measured conductance, corrected for temperature and pressure, is compared to the conductance of a standard potassium chloride solution, producing a value on the Practical Salinity Scale of 1978 (PSS-78). This name should not be used to describe salinity observations made before 1978, or ones not based on conductance measurements.`,
    salinity2_description:`Practical Salinity from conductivity ratio. <br>Practical Salinity, S_P, is a determination of the salinity of sea water, based on its electrical conductance. The measured conductance, corrected for temperature and pressure, is compared to the conductance of a standard potassium chloride solution, producing a value on the Practical Salinity Scale of 1978 (PSS-78). This name should not be used to describe salinity observations made before 1978, or ones not based on conductance measurements.`,
    ptemperature1_description:`Potential Temperature with Reference Pressure. <br>Potential temperature is the temperature a parcel of air or sea water would have if moved adiabatically to sea level pressure.`,
    soundspeed_description:`The speed of sound in seawater in m/s. <br>The speed of sound in standard seawater is measured relative to that in pure water as a function of temperature in the range 0 to 40 degree C and salinity in the range 5 to 40% at one atm. The resulting sound speeds fit an equation to a standard deviation of 0.04 m sec** minus **1 over the entire ranges of temperature and salinity.`,
    freezingpoint_description:`The temperature at which seawater freezes. <br>Salt water is most dense at its freezing point, unlike fresh water, which is most dense at about 3.9°C (39.0°F).`,
    latitude_description:`Convert degrees, minutes, seconds to decimal degrees. <br>To calculate decimal degrees, we use the DMS to decimal degree formula below: Decimal Degrees = degrees + (minutes/60) + (seconds/3600).`,
    longitude_description:`Convert degrees, minutes, seconds to decimal degrees. <br>To calculate decimal degrees, we use the DMS to decimal degree formula below: Decimal Degrees = degrees + (minutes/60) + (seconds/3600).`,
    coriolis1_description:`Coriolis frequency in 10<sup>-4</sup> s<sup>-1</sup> units. <br>The Coriolis frequency ƒ, also called the Coriolis parameter or Coriolis coefficient, is equal to twice the rotation rate Ω of the Earth multiplied by the sine of the latitude. `,
    coriolis2_description:`Coriolis period in hours`,
    asalinity1_description:`Absolute Salinity from Practical Salinity. <br> Absolute Salinity, S_A, is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the Intergovernmental Oceanographic Commission (IOC). It is the mass fraction of dissolved material in sea water. Absolute Salinity incorporates the spatial variations in the composition of sea water. This type of Absolute Salinity is also called "Density Salinity". TEOS-10 estimates Absolute Salinity as the salinity variable that, when used with the TEOS-10 expression for density, yields the correct density of a sea water sample even when the sample is not of Reference Composition. In practice, Absolute Salinity is often calculated from Practical Salinity using a spatial lookup table of pre-defined values of the Absolute Salinity Anomaly. It is recommended that the version of (TEOS-10) software and the associated Absolute Salinity Anomaly climatology be specified within metadata by attaching a comment attribute to the data variable. `,
    psalinity1_description:`Preformed Salinity from Practical Salinity. <br>Preformed Salinity, S*, is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the Intergovernmental Oceanographic Commission (IOC). Preformed Salinity is a salinity variable that is designed to be as conservative as possible, by removing the estimated biogeochemical influences on the sea water composition. Preformed Salinity is Absolute Salinity, S_A (which has the standard name sea_water_absolute_salinity), minus all contributions to sea water composition from biogeochemical processes. Preformed Salinity is the mass fraction of dissolved material in sea water. `,
    ctemperature1_description:`Conservative Temperature of seawater from in-situ temperature. <br>Conservative Temperature is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the International Oceanographic Commission (IOC). Conservative Temperature is specific potential enthalpy (which has the standard name sea_water_specific_potential_enthalpy) divided by a fixed value of the specific heat capacity of sea water, namely cp_0 = 3991.86795711963 J kg-1 K-1. Conservative Temperature is a more accurate measure of the "heat content" of sea water, by a factor of one hundred, than is potential temperature. Because of this, it can be regarded as being proportional to the heat content of sea water per unit mass.`,
    deltaSA_from_SP_description:`The Absolute Salinity Anomaly from Practical Salinity. <br>Absolute Salinity is often calculated from Practical Salinity using a spatial lookup table of pre-defined values of the Absolute Salinity Anomaly.`,
    rsalinity1_description:`Reference Salinity from Practical Salinity. <br>Reference Salinity is (35.16504 g kg-1)/35 times Practical Salinity.`,
    salinity3_description:`Practical Salinity from Reference Salinity. <br>Practical Salinity, S_P, is a determination of the salinity of sea water, based on its electrical conductance. The measured conductance, corrected for temperature and pressure, is compared to the conductance of a standard potassium chloride solution, producing a value on the Practical Salinity Scale of 1978 (PSS-78). This name should not be used to describe salinity observations made before 1978, or ones not based on conductance measurements. `,
    salinity4_description:`Practical Salinity from Absolute Salinity, pressure, longitude, and latitude. <br>Practical Salinity, S_P, is a determination of the salinity of sea water, based on its electrical conductance. The measured conductance, corrected for temperature and pressure, is compared to the conductance of a standard potassium chloride solution, producing a value on the Practical Salinity Scale of 1978 (PSS-78). This name should not be used to describe salinity observations made before 1978, or ones not based on conductance measurements.`,
    Sstar_from_SA_description:`Preformed Salinity from Absolute Salinity, pressure, longitude, and latitude. <br>Preformed Salinity, S*, is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the Intergovernmental Oceanographic Commission (IOC). Preformed Salinity is a salinity variable that is designed to be as conservative as possible, by removing the estimated biogeochemical influences on the sea water composition. Preformed Salinity is Absolute Salinity, S_A (which has the standard name sea_water_absolute_salinity), minus all contributions to sea water composition from biogeochemical processes. Preformed Salinity is the mass fraction of dissolved material in sea water.`,
    salinity5_description:`Practical Salinity from Preformed Salinity, pressure, longitude, and latitude. <br>Practical Salinity, S_P, is a determination of the salinity of sea water, based on its electrical conductance. The measured conductance, corrected for temperature and pressure, is compared to the conductance of a standard potassium chloride solution, producing a value on the Practical Salinity Scale of 1978 (PSS-78). This name should not be used to describe salinity observations made before 1978, or ones not based on conductance measurements.`,
    asalinity2_description:`Absolute Salinity from Preformed Salinity, pressure, longitude, and latitude. <br>Absolute Salinity, S_A, is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the Intergovernmental Oceanographic Commission (IOC). It is the mass fraction of dissolved material in sea water. Absolute Salinity incorporates the spatial variations in the composition of sea water. This type of Absolute Salinity is also called "Density Salinity". TEOS-10 estimates Absolute Salinity as the salinity variable that, when used with the TEOS-10 expression for density, yields the correct density of a sea water sample even when the sample is not of Reference Composition. In practice, Absolute Salinity is often calculated from Practical Salinity using a spatial lookup table of pre-defined values of the Absolute Salinity Anomaly. It is recommended that the version of (TEOS-10) software and the associated Absolute Salinity Anomaly climatology be specified within metadata by attaching a comment attribute to the data variable. `,
    CT_from_pt_description:`Conservative Temperature of seawater from potential temperature. <br>Conservative Temperature is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the International Oceanographic Commission (IOC). Conservative Temperature is specific potential enthalpy (which has the standard name sea_water_specific_potential_enthalpy) divided by a fixed value of the specific heat capacity of sea water, namely cp_0 = 3991.86795711963 J kg-1 K-1. Conservative Temperature is a more accurate measure of the "heat content" of sea water, by a factor of one hundred, than is potential temperature. Because of this, it can be regarded as being proportional to the heat content of sea water per unit mass.`,
    pt_from_CT_description:`Potential Temperature (with a reference sea pressure of zero dbar) from Conservative Temperature. <br>Potential temperature is the temperature a parcel of air or sea water would have if moved adiabatically to sea level pressure.`,
    pt0_from_t_description:`Potential Temperature with reference pressure, pr = 0 dbar. <br>Potential temperature is the temperature a parcel of air or sea water would have if moved adiabatically to sea level pressure.`,
    rho_description:`In-situ density from Absolute Salinity and Conservative Temperature. <br>Sea water density is the in-situ density (not the potential density). If 1000 kg m-3 is subtracted, the standard name "sea_water_sigma_t" should be chosen instead. "change_over_time_in_X" means change in a quantity X over a time-interval, which should be defined by the bounds of the time coordinate.`,
    alpha_description:`The thermal expansion coefficient of seawater with respect to Conservative Temperature. <br>The coefficient of thermal expansion (CTE) refers to the rate at which a material expands with increase in temperature. More specifically, this coefficient is determined at constant pressure and without a phase change, i.e. the material is expected to still be in its solid or fluid form.`,
    beta_description:`The saline (i.e. haline) contraction coefficient of seawater. <br>The Haline contraction coefficient, abbreviated as β, is a coefficient that describes the change in ocean density due to a salinity change, while the potential temperature and the pressure are kept constant. `,
    specvol_description:`Specific volume from Absolute Salinity, Conservative Temperature and pressure. <br>The specific volume of a substance (symbol: ν or {\displaystyle \nu }\nu ) is an intrinsic property of the substance, defined as the ratio of the substance's volume (V) to its mass (m). It is the reciprocal of density (ρ) and it is related to the molar volume and molar mass.`,
    sound_speed_description:`The speed of sound in seawater. <br>The speed of sound in standard seawater is measured relative to that in pure water as a function of temperature in the range 0 to 40 degree C and salinity in the range 5 to 40% at one atm. The resulting sound speeds fit an equation to a standard deviation of 0. 04 m sec** minus **1 over the entire ranges of temperature and salinity.`,
    internal_energy_description:`The specific internal energy of seawater. <br>  The specific internal energy (u) of a substance is its internal energy per unit mass. It equals the total internal energy (U) divided by the total mass (m). `,
    enthalpy_description:`Specific enthalpy of seawater. <br>The specific enthalpy of a uniform system is defined as h = H/m where m is the mass of the system. The SI unit for specific enthalpy is joule per kilogram.`,
    dynamic_enthalpy_description:`Dynamic enthalpy of seawater using the computationally. <br>Dynamic enthalpy is defined as enthalpy minus potential enthalpy`,
    t_freezing_description:`The in-situ temperature at which seawater freezes. <br>The in-situ temperature freezing point is calculated from the exact in-situ freezing temperature which is found by a modified Newton-Raphson iteration (McDougall and Wotherspoon, 2013) of the equality of the chemical potentials of water in seawater and in ice.`,
    CT_freezing_description:`The Conservative Temperature at which seawater freezes. <br>Conservative Temperature is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the International Oceanographic Commission (IOC). Conservative Temperature is specific potential enthalpy (which has the standard name sea_water_specific_potential_enthalpy) divided by a fixed value of the specific heat capacity of sea water, namely cp_0 = 3991.86795711963 J kg-1 K-1. Conservative Temperature is a more accurate measure of the "heat content" of sea water, by a factor of one hundred, than is potential temperature. Because of this, it can be regarded as being proportional to the heat content of sea water per unit mass.`,
    latentheat_melting_description:`Latent heat, or enthalpy, of melting. It is defined in terms of Absolute Salinity and sea pressure`,
    latentheat_evap_ct_description:`Latent heat of evaporation of water from seawater (isobaric evaporation enthalpy) with Conservative Temperature as input temperature`,
    latentheat_evap_t_description:`Latent heat of evaporation of water from seawater (isobaric evaporation enthalpy) with in-situ temperature`,
    rho_t_exact_description:`The potential density of a fluid parcel at pressure P is the density that the parcel would acquire if adiabatically brought to a reference pressure, often 1 bar (100 kPa). Whereas density changes with changing pressure, potential density of a fluid parcel is conserved as the pressure experienced by the parcel changes (provided no mixing with other parcels or net heat flux occurs). of seawater from Absolute Salinity and in-situ temperature`,
    pot_rho_t_exact_description:`Potential density of seawater. <br>The potential density of a fluid parcel at pressure P is the density that the parcel would acquire if adiabatically brought to a reference pressure, often 1 bar (100 kPa). Whereas density changes with changing pressure, potential density of a fluid parcel is conserved as the pressure experienced by the parcel changes (provided no mixing with other parcels or net heat flux occurs).`,
    alpha_wrt_t_exact_description:`The thermal expansion coefficient of seawater with respect to in-situ temperature`,
    beta_const_t_exact_description:`The saline contraction coefficient of seawater at constant in-situ temperature`,
    specvol_t_exact_description:`Specific volume from Absolute Salinity, temperature and pressure. <br>The specific volume of a substance is an intrinsic property of the substance, defined as the ratio of the substance's volume (V) to its mass (m). It is the reciprocal of density (ρ) and it is related to the molar volume and molar mass.`,
    sound_speed_t_exact_description:`The speed of sound in seawater. <br>The speed of sound in standard seawater is measured relative to that in pure water as a function of temperature in the range 0 to 40 degree C and salinity in the range 5 to 40% at one atm. The resulting sound speeds fit an equation to a standard deviation of 0.04 m sec** minus **1 over the entire ranges of temperature and salinity.`,
    kappa_t_exact_description:`The isentropic compressibility of seawater. <br>Isentropic compressibility, is defined as the change in volume with pressure under constant entropy per unit volume.`,
    enthalpy_t_exact_description:`The specific enthalpy of seawater. <br>The specific enthalpy is defined as the sum of two terms: specific internal energy of the system (i.e. the kinetic energy involved in vibrating molecules plus the potential energy of chemical bonds and electrostatic charges), and energy required to make room for the system by displacing its environment.`,
    entropy_from_t_description:`Specific entropy given Absolute Salinity, in-situ temperature and pressure. <br>Entropy measures the amount of disorder in the system, or the nonmechanical energy which is not accessible. It has the special property that it is always produced (rather than destroyed) by both molecular and turbulent mixing processes. `,
    cp_t_exact_description:`The isobaric heat capacity of seawater. <br>The specific isobaric heat capacity is the rate of change of specific enthalpy with temperature at constant Absolute Salinity AS and pressure p.`,
}
