import axios from 'axios';

export default class BayernCloud {

    async getListOfDescriptions() {
        const response = await axios.get<String>(
            "https://data.bayerncloud.digital/api/v4/endpoints/list_poi?page[number]=2&page[size]=25",
            { headers: { Authorization: 'Bearer ' + import.meta.env.VITE_BAYERN_CLOUD_API_KEY } })
        return response.data['@graph'].map(val => val.description).toString()
    }

    onChangeFileUpload(event) {
        this.file = event.target.files[0];
    }

}
export interface RolleBayern {
    "@context": Array<ContextClass | string>;
    "@graph": Graph[];
    meta: Meta;
    links: Links;
}

export interface ContextClass {
    "@base": string;
    "@language": Language;
    skos: string;
    dct: string;
    cc: string;
    dc: string;
    dcls: string;
    odta: string;
    sdm: string;
}

export enum Language {
    De = "de",
}

export interface Graph {
    "@id": string;
    "@type": GraphType[];
    "dc:multilingual": boolean;
    "dc:translation": Language[];
    "dc:classification": DcClassification[];
    name: string;
    description: string;
    "dc:additionalInformation": DcAdditionalInformation[];
    address: Address;
    geo: Geo;
    openingHoursSpecification?: OpeningHoursSpecification[];
    copyrightNotice: CopyrightNotice;
    "dc:slug": string;
    "dc:contentScore": DcContentScore[];
    additionalProperty?: AdditionalProperty[];
    sdLicense?: string;
    image?: DcAdditionalInformation[];
}

export enum GraphType {
    DclsPOI = "dcls:POI",
    Place = "Place",
    TouristAttraction = "TouristAttraction",
}

export interface AdditionalProperty {
    "@type": AdditionalPropertyType;
    identifier: AdditionalPropertyIdentifier;
    name: AdditionalPropertyName;
    "@id": string;
    value: string;
}

export enum AdditionalPropertyType {
    PropertyValue = "PropertyValue",
}

export enum AdditionalPropertyIdentifier {
    Text = "text",
}

export enum AdditionalPropertyName {
    Beschreibung = "Beschreibung",
}

export interface Address {
    "@type": AddressType;
    streetAddress?: string;
    postalCode: string;
    addressLocality: string;
    "@id": string;
    telephone?: string;
    email?: string;
    url?: string;
    faxNumber?: string;
}

export enum AddressType {
    PostalAddress = "PostalAddress",
}

export enum CopyrightNotice {
    CCBYSA40DonautalAktivEV = "CC BY-SA 4.0 Donautal-Aktiv e.V.",
    CCBYSA40LandkreisNeuUlm = "CC BY-SA 4.0 Landkreis Neu-Ulm",
    CcBy40 = "CC BY 4.0",
    CcBySa40 = "CC BY-SA 4.0",
}

export interface DcAdditionalInformation {
    "@id": string;
    "@type": DcAdditionalInformationType[];
}

export enum DcAdditionalInformationType {
    CreativeWork = "CreativeWork",
    DclsBild = "dcls:Bild",
    DclsErgänzendeInformation = "dcls:Ergänzende Information",
    ImageObject = "ImageObject",
    MediaObject = "MediaObject",
}

export interface DcClassification {
    "@id": string;
    "@type": DcClassificationType;
}

export enum DcClassificationType {
    SkosConcept = "skos:Concept",
}

export interface DcContentScore {
    "@type": AdditionalPropertyType;
    identifier: DcContentScoreIdentifier;
    name: DcContentScoreName;
    "@id": string;
    value: number;
    minValue: number;
    maxValue: number;
}

export enum DcContentScoreIdentifier {
    InternalContentScore = "internalContentScore",
}

export enum DcContentScoreName {
    InternerContentScore = "Interner Content Score",
}

export interface Geo {
    longitude: number;
    "@id": string;
    "@type": GeoType;
    latitude: number;
}

export enum GeoType {
    GeoCoordinates = "GeoCoordinates",
}

export interface OpeningHoursSpecification {
    "@id": string;
    "@type": TypeType[] | TypeType;
    validFrom?: Date;
    validThrough?: Date;
    opens?: string;
    closes?: string;
    dayOfWeek?: string[];
    description?: string;
    "dc:multilingual"?: boolean;
    "dc:translation"?: Language[];
}

export enum TypeType {
    DclsÖffnungszeitBeschreibung = "dcls:Öffnungszeit - Beschreibung",
    Intangible = "Intangible",
    OpeningHoursSpecification = "OpeningHoursSpecification",
    StructuredValue = "StructuredValue",
}

export interface Links {
    prev: string;
    next: string;
}

export interface Meta {
    total: number;
    pages: number;
    collection: Collection;
}

export interface Collection {
    id: string;
    name: string;
    slug: string;
}

