import { Manufacturer, CoreBonus, Frame, MechWeapon, MechSystem, WeaponMod, PilotGear, Talent, Tag } from '@/class';
import { IManufacturerData, ICoreBonusData, IFrameData, IMechWeaponData, IMechSystemData, IWeaponModData, IPilotEquipmentData, ITalentData } from '@/interface';



export interface IContentPackManifest {
  name: string
  author: string
  version: string
  description?: string
  website?: string
  image_url?: string
}
interface IContentPackData {
  manufacturers: IManufacturerData[]
  coreBonuses: ICoreBonusData[]
  frames: IFrameData[]
  weapons: IMechWeaponData[]
  systems: IMechSystemData[]
  mods: IWeaponModData[]
  pilotGear: IPilotEquipmentData[]
  talents: ITalentData[]
  tags: ITagData[]
}

export interface IContentPack {
  id: string
  active: boolean
  manifest: IContentPackManifest
  data: IContentPackData
}

export class ContentPack {

  private _manifest: IContentPackManifest
  private _id: string
  public get ID(): string { return this._id }

  public get Name(): string { return this._manifest.name }
  public get Author(): string { return this._manifest.author }
  public get Version(): string { return this._manifest.version }
  public get Description(): string | undefined { return this._manifest.description }
  public get Website(): string | undefined { return this._manifest.website }
  public get ImageURL(): string | undefined { return this._manifest.image_url }


  private _data: IContentPackData

  private _Manufacturers: Manufacturer[] = []
  public get Manufacturers(): Manufacturer[] { return this._Manufacturers }
  
  private _CoreBonuses: CoreBonus[] = []
  public get CoreBonuses(): CoreBonus[] { return this._CoreBonuses }
  
  private _Frames: Frame[] = []
  public get Frames(): Frame[] { return this._Frames }
  
  private _MechWeapons: MechWeapon[] = []
  public get MechWeapons(): MechWeapon[] { return this._MechWeapons }

  private _MechSystems: MechSystem[] = []
  public get MechSystems(): MechSystem[] { return this._MechSystems }
  
  private _WeaponMods: WeaponMod[] = []
  public get WeaponMods(): WeaponMod[] { return this._WeaponMods }
  
  private _PilotGear: PilotGear[] = []
  public get PilotGear(): PilotGear[] { return this._PilotGear }
  
  private _Talents: Talent[] = []
  public get Talents(): Talent[] { return this._Talents }
  
  private _Tags: Tag[] = []
  public get Tags(): Tag[] { return this._Tags }


  private _active: boolean
  public get Active(): boolean { return this._active }
  public SetActive(active: boolean): void { this._active = active }

  constructor(pack: IContentPack) {

    const { id, active, manifest, data } = pack

    this._active = active
    this._manifest = manifest
    this._data = data
    this._id = id
    
    this._Manufacturers = this._data.manufacturers.map(x => new Manufacturer(x))
    this._CoreBonuses = this._data.coreBonuses.map(x => new CoreBonus(x))
    this._Frames = this._data.frames.map(x => new Frame(x))
    this._MechWeapons = this._data.weapons.map(x => new MechWeapon(x))
    this._MechSystems = this._data.systems.map(x => new MechSystem(x))
    this._WeaponMods = this._data.mods.map(x => new WeaponMod(x))
    this._PilotGear = this._data.pilotGear.map(x => new PilotGear(x))
    this._Talents = this._data.talents.map(x => new Talent(x))
    this._Tags = this._data.tags.map(x => new Tag(x))

  }

  public Serialize(): IContentPack {
    return {
      id: this._id,
      active: this._active,
      manifest: this._manifest,
      data: this._data
    }
  }
  
}