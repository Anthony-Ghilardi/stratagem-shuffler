import flamSentryIcon from "../assets/icons/flamSentryIcon.png";
import laserSentryIcon from "../assets/icons/laserSentryIcon.png";
import emsMortarIcon from "../assets/icons/emsMortarSentry.png";
import antimaterialRifleIcon from "../assets/icons/antimaterialRifleIcon.png";
import antiPersonnelMineicon from "../assets/icons/antiPersonelMineIcon.png";
import acrThrowerIcon from "../assets/icons/arcThrowerIcon.png";
import autocannonSentryIcon from "../assets/icons/autocannonSentryIcon.png";
import autocannonIcon from "../assets/icons/autocannonIcon.png";
import ballisticShieldBackpackIcon from "../assets/icons/ballisticShieldIcon.png";
import commandoIcon from "../assets/icons/commandoIcon.png";
import oneTrueFlagIcon from "../assets/icons/oneTrueFlagIcon.png";
import eatEmplacementIcon from "../assets/icons/eatEmplacementicon.png";
import eagle110Icon from "../assets/icons/eagle110Icon.png";
import eagle500icon from "../assets/icons/eagle500Icon.png";
import eagleAirstrikeIcon from "../assets/icons/eagleAirstrikeIcon.png";
import eagleClusterIcon from "../assets/icons/eagleClusterIcon.png"
import eagleNapalmIcon from "../assets/icons/eagleNapalmIcon.png";
import eagleSmokeIcon from "../assets/icons/eagleSmokeIcon.png";
import eagleStrafeIcon from "../assets/icons/eagleStrafeicon.png";
import eat700Icon from "../assets/icons/eat700Icon.png";
import patriotMechIcon from "../assets/icons/patriotMechIcon.png";
import emancipatorMechIcon from "../assets/icons/emancipatorMechIcon.png";
import eatIcon from "../assets/icons/eatIcon.png";
import flamethrowerIcon from "../assets/icons/flamethrowerIcon.png";
import gasMineIcon from "../assets/icons/gasMineicon.png";
import gatlingSentryIcon from "../assets/icons/gatlingSentryIcon.png";
import grenadierBattlementIcon from "../assets/icons/grenadierBattlementIcon.png";
import grenadeLauncherIcon from "../assets/icons/grenadeLauncherIcon.png";
import dogBreathIcon from "../assets/icons/dogBreathIcon.png";
import roverIcon from "../assets/icons/roverIcon.png";
import guardDogIcon from "../assets/icons/guardDogIcon.png";
import hmgIcon from "../assets/icons/hmgIcon.png";
import hmgEmplacementIcon from "../assets/icons/hmgEmplacementIcon.png";
import incendiaryMineIcon from "../assets/icons/incendiaryMineIcon.png";
import jumpackIcon from "../assets/icons/jumpPackIcon.png";
import laserCannonIcon from "../assets/icons/laserCannonIcon.png";
import frvIcon from "../assets/icons/frvIcon.png";
import machineGunSentryIcon from "../assets/icons/machineGunSentryIcon.png";
import machineGunIcon from "../assets/icons/machineGunIcon.png"
import antiTankMineIcon from "../assets/icons/antiTankMinesicon.png";
import mortarSentryIcon from "../assets/icons/mortarSentryIcon.png";
import missleSiloicon from "../assets/icons/missleSiloIcon.png";
import orbital120Icon from "../assets/icons/orbital120Icon.png";
import orbital380Icon from "../assets/icons/orbital380Icon.png";
import orbitalAirburstIcon from "../assets/icons/orbitalAirburstIcon.png";
import orbitalEmsIcon from "../assets/icons/orbitalEmsIcon.png";
import orbitalGasIcon from "../assets/icons/orbitalGasIcon.png";
import gatlingBarrageIcon from "../assets/icons/gatlingBarrageIcon.png"
import orbitalLaserIcon from "../assets/icons/orbitalLaserIcon.png";
import napalmBarrageIcon from "../assets/icons/napalmBarrageIcon.png";
import orbitalPrecisionIcon from "../assets/icons/orbitalPrecisionIcon.png"
import orbitalRailcannonIcon from "../assets/icons/orbitalRailcannonIcon.png";
import orbitalSmokeIcon from "../assets/icons/orbitalSmokeIcon.png";
import walkingBarrageIcon from "../assets/icons/walkingBarrageIcon.png";
import portableHellbombIcon from "../assets/icons/portableHellbombIcon.png";
import quasarCannonIcon from "../assets/icons/quasarCannonIcon.png";
import railgunIcon from "../assets/icons/railgunIcon.png";
import recoillessRifleIcon from "../assets/icons/recoillessRifleIcon.png";
import airbustRocketLauncherIcon from "../assets/icons/airburstRocketLauncherIcon.png";
import rocketSentryIcon from "../assets/icons/rocketSentryIcon.png";
import spearGunIcon from "../assets/icons/speargunIcon.png";
import directionalShieldIcon from "../assets/icons/directionalShieldIcon.png";
import shieldGeneratorPackIcon from "../assets/icons/shieldGeneratorPackIcon.png";
import shieldGeneratorIcon from "../assets/icons/shieldGeneratorRelayIcon.png"
import spearIcon from "../assets/icons/spearIcon.png";
import stalwartIcon from "../assets/icons/stalwartIcon.png";
import waspIcon from "../assets/icons/waspIcon.png";
import sterilizerIcon from "../assets/icons/sterilizerIcon.png";
import supplyPackIcon from "../assets/icons/supplyPackIcon.png";
import teslaTowerIcon from "../assets/icons/teslaTowerIcon.png";


export const stratagems = [
  {
    id: 1,
    name: "A FLAM-40 Flame Sentry",
    category: "sentry",
    isBackpack: false,
    icon: flamSentryIcon,
  },
  { id: 2,
    name: "A LAS-98 Laser Sentry",
    category: "sentry",
    isBackpack: false,
    icon: laserSentryIcon,
  },
  {
    id: 3,
    name: "AM-23 EMS Mortar Sentry Stratagem",
    category: "sentry",
    isBackpack: false,
    icon: emsMortarIcon,
  },
  { id: 4,
    name: "Anti-Materiel Rifle",
    category: "weapon",
    isBackpack: false,
    icon: antimaterialRifleIcon,
  },
  {
    id: 6,
    name: "Anti-Personnel Minefield",
    category: "mine",
    isBackpack: false,
    icon: antiPersonnelMineicon,
  },
  {
    id: 7, 
    name: "Arc Thrower", 
    category: "weapon", 
    isBackpack: false,
    icon: acrThrowerIcon,
  },
  { 
    id: 8, 
    name: "Autocannon Sentry", 
    category: "sentry", 
    isBackpack: false,
    icon: autocannonSentryIcon, 
  },
  { 
    id: 9, 
    name: "Autocannon", 
    category: "weapon", 
    isBackpack: true,
    icon: autocannonIcon,
  },
  {
    id: 10,
    name: "Ballistic Shield Backpack",
    category: "backpack",
    isBackpack: true,
    icon: ballisticShieldBackpackIcon,
  },
  { 
    id: 11, 
    name: "Commando Stratagem", 
    category: "weapon", 
    isBackpack: false,
    icon: commandoIcon, 
  },
  { 
    id: 12,
    name: "CQC-1 One True Flag", 
    category: "weapon", 
    isBackpack: false,
    icon: oneTrueFlagIcon,
  },
  {
    id: 13,
    name: "E AT-12 Anti-Tank Emplacement",
    category: "emplacement",
    isBackpack: false,
    icon: eatEmplacementIcon,
  },
  {
    id: 14,
    name: "Eagle 110mm Rocket Pods",
    category: "eagle",
    isBackpack: false,
    icon: eagle110Icon,
  },
  { 
    id: 15,
    name: "Eagle 500kg Bomb", 
    category: "eagle", 
    isBackpack: false, 
    icon: eagle500icon,
  },
  { 
    id: 16,
    name: "Eagle Airstrike",
    category: "eagle", 
    isBackpack: false,
    icon: eagleAirstrikeIcon,
  },
  { 
    id: 17,
    name: "Eagle Cluster Bomb", 
    category: "eagle", 
    isBackpack: false,
    icon: eagleClusterIcon, 
  },
  { id: 18,
    name: "Eagle Napalm Airstrike", 
    category: "eagle", 
    isBackpack: false,
    icon: eagleNapalmIcon,
  },
  { 
    id: 19, 
    name: "Eagle Smoke Strike", 
    category: "eagle", 
    isBackpack: false,
    icon: eagleSmokeIcon, 
  },
  {
    id: 20,
    name: "Eagle Strafing Run Stratagem",
    category: "eagle",
    isBackpack: false,
    icon: eagleStrafeIcon,
  },
  {
    id: 21,
    name: "EAT-700 Expendable Napalm",
    category: "weapon",
    isBackpack: false,
    icon: eat700Icon,
  },
  {
    id: 22,
    name: "EXO-45 Patriot Exosuit",
    category: "vehicle",
    isBackpack: false,
    icon: patriotMechIcon,
  },
  {
    id: 23,
    name: "EXO-49 Emancipator Exosuit",
    category: "vehicle",
    isBackpack: false,
    icon: emancipatorMechIcon,
  },
  { 
    id: 24, 
    name: "Expendable Anti-Tank", 
    category: "weapon", 
    isBackpack: false,
    icon: eatIcon, 
  },
  { 
    id: 25, 
    name: "Flamethrower", 
    category: "weapon", 
    isBackpack: false,
    icon: flamethrowerIcon, 
  },
  { 
    id: 26, 
    name: "Gas Minefield", 
    category: "mine", 
    isBackpack: false,
    icon: gasMineIcon, 
  },
  { 
    id: 27, 
    name: "Gatling Sentry", 
    category: "sentry", 
    isBackpack: false,
    icon: gatlingSentryIcon, 
  },
  {
    id: 28,
    name: "GL-21 Grenadier Battlement",
    category: "emplacement",
    isBackpack: false,
    icon: grenadierBattlementIcon,
  },
  { 
    id: 29, 
    name: "Grenade Launcher", 
    category: "weapon", 
    isBackpack: false,
    icon: grenadeLauncherIcon,
  },
  { 
    id: 30, 
    name: "Guard Dog Dog Breath", 
    category: "backpack", 
    isBackpack: true,
    icon: dogBreathIcon, 
  },
  { 
    id: 31, 
    name: "Guard Dog Rover", 
    category: "backpack", 
    isBackpack: true,
    icon: roverIcon, 
  },
  { 
    id: 32, 
    name: "Guard Dog", 
    category: "backpack", 
    isBackpack: true,
    icon: guardDogIcon, 
  },
  { 
    id: 33, 
    name: "Heavy Machine Gun", 
    category: "weapon", 
    isBackpack: false,
    icon: hmgIcon, 
  },
  { 
    id: 34, 
    name: "HMG Emplacement", 
    category: "emplacement", 
    isBackpack: false,
    icon: hmgEmplacementIcon, 
  },
  { 
    id: 35, 
    name: "Incendiary Mines", 
    category: "mine", 
    isBackpack: false,
    icon: incendiaryMineIcon, 
  },
  { 
    id: 36, 
    name: "Jump Pack", 
    category: "backpack", 
    isBackpack: true,
    icon: jumpackIcon, 
  },
  { 
    id: 37, 
    name: "Laser Cannon ", 
    category: "weapon", 
    isBackpack: false,
    icon: laserCannonIcon, 
  },
  {
    id: 38,
    name: "M-102 Fast Recon Vehicle",
    category: "vehicle",
    isBackpack: false,
    icon: frvIcon,
  },
  { 
    id: 39, 
    name: "Machine Gun Sentry", 
    category: "sentry", 
    isBackpack: false,
    icon: machineGunSentryIcon, 
  },
  { 
    id: 40, 
    name: "Machine Gun", 
    category: "weapon", 
    isBackpack: false,
    icon: machineGunIcon,
  },
  {
    id: 41,
    name: "MD-17 Anti-Tank Mines",
    category: "mine",
    isBackpack: false,
    icon: antiTankMineIcon,
  },
  { 
    id: 42, 
    name: "Mortar Sentry", 
    category: "sentry", 
    isBackpack: false,
    icon: mortarSentryIcon, 
  },
  { 
    id: 43, 
    name: "MS-11 Missle Silo", 
    category: "emplacement", 
    isBackpack: false,
    icon: missleSiloicon, 
  },
  {
    id: 44,
    name: "Orbital 120mm HE Barrage",
    category: "orbital",
    isBackpack: false,
    icon: orbital120Icon,
  },
  {
    id: 45,
    name: "Orbital 380mm HE Barrage",
    category: "orbital",
    isBackpack: false,
    icon: orbital380Icon,
  },
  {
    id: 46,
    name: "Orbital Airburst Strike",
    category: "orbital",
    isBackpack: false,
    icon: orbitalAirburstIcon,
  },
  { 
    id: 47, 
    name: "Orbital EMS Strike", 
    category: "orbital", 
    isBackpack: false,
    icon: orbitalEmsIcon, 
  },
  { 
    id: 48, 
    name: "Orbital Gas Strike", 
    category: "orbital", 
    isBackpack: false, 
    icon: orbitalGasIcon, 
  },
  {
    id: 49,
    name: "Orbital Gatling Barrage",
    category: "orbital",
    isBackpack: false,
    icon: gatlingBarrageIcon,
  },
  {
    id: 50,
    name: "Orbital Laser Stratagem",
    category: "orbital",
    isBackpack: false,
    icon: orbitalLaserIcon,
  },
  { 
    id: 51, 
    name: "Orbital Napalm Barrage", 
    category: "orbital", 
    isBackpack: false,
    icon: napalmBarrageIcon, 
  },
  {
    id: 52,
    name: "Orbital Precision Strike",
    category: "orbital",
    isBackpack: false,
    icon: orbitalPrecisionIcon,
  },
  {
    id: 53,
    name: "Orbital Railcannon Strike",
    category: "orbital",
    isBackpack: false,
    icon: orbitalRailcannonIcon,
  },
  { 
    id: 54, 
    name: "Orbital Smoke Strike", 
    category: "orbital", 
    isBackpack: false,
    icon: orbitalSmokeIcon,
  },
  {
    id: 55,
    name: "Orbital Walking Barrage",
    category: "orbital",
    isBackpack: false,
    icon: walkingBarrageIcon,
  },
  { 
    id: 56, 
    name: "Portable Hellbomb", 
    category: "backpack", 
    isBackpack: true,
    icon: portableHellbombIcon, 
  },
  { 
    id: 57, 
    name: "Quasar Cannon", 
    category: "weapon", 
    isBackpack: false,
    icon: quasarCannonIcon, 
  },
  { 
    id: 58, 
    name: "Railgun", 
    category: "weapon", 
    isBackpack: false,
    icon: railgunIcon, 
  },
  { 
    id: 59, 
    name: "Recoilless Rifle", 
    category: "weapon", 
    isBackpack: true,
    icon: recoillessRifleIcon, 
  },
  {
    id: 60,
    name: "RL-77 Airburst Rocket Launcher",
    category: "weapon",
    isBackpack: true,
    icon: airbustRocketLauncherIcon,
  },
  {
    id: 61, 
    name: "Rocket Sentry", 
    category: "sentry", 
    isBackpack: false,
    icon: rocketSentryIcon, 
  },
  { 
    id: 62, 
    name: "S-11 Speargun", 
    category: "weapon", 
    isBackpack: false,
    icon: spearGunIcon, 
  },
  {
    id: 63,
    name: "SH-51 Directional Shield",
    category: "backpack",
    isBackpack: true,
    icon: directionalShieldIcon,
  },
  {
    id: 64,
    name: "Shield Generator Pack",
    category: "backpack",
    isBackpack: true,
    icon: shieldGeneratorPackIcon,
  },
  {
    id: 65,
    name: "Shield Generator Relay",
    category: "emplacement",
    isBackpack: false,
    icon: shieldGeneratorIcon,
  },
  { 
    id: 66, 
    name: "Spear", 
    category: "weapon", 
    isBackpack: true,
    icon: spearIcon,
  },
  {
    id: 67,
    name: "StA-X3 W.A.S.P. Launcher",
    category: "weapon",
    isBackpack: true,
    icon: waspIcon,
  },
  { 
    id: 68, 
    name: "Stalwart", 
    category: "weapon", 
    isBackpack: false,
    icon: stalwartIcon, 
  },
  { 
    id: 69, 
    name: "Sterilizer", 
    category: "weapon", 
    isBackpack: false,
    icon: sterilizerIcon, 
  },
  { 
    id: 70, 
    name: "Supply Pack", 
    category: "backpack", 
    isBackpack: false,
    icon: supplyPackIcon, 
  },
  { 
    id: 71, 
    name: "Tesla Tower", 
    category: "sentry", 
    isBackpack: false,
    icon: teslaTowerIcon, 
},
];
