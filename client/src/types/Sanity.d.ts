import type { TypedObject } from "@portabletext/types";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import type { SanityDocument } from "next-sanity";

declare global {
  namespace Sanity {
    // documents

    type Image = SanityImageObject &
      Partial<{
        alt: string;
        loading: "lazy" | "eager";
      }>;

    type HeaderLogo = SanityDocument<{
      name: string;
      image: {
        default?: string;
        light?: string;
        dark?: string;
      };
    }>;

    type Logo = SanityDocument<{
      name: string;
      image: {
        default?: Image;
        light?: Image;
        dark?: Image;
      };
    }>;

    type HeaderLogo = SanityDocument<{
      name: string;
      image: {
        default?: string;
        light?: string;
        dark?: string;
      };
    }>;

    type Metadata = {
      title?: string;
      description: string;
      slug: { current: string };
      image?: Image;
      ogimage?: string;
      noIndex: boolean;
    };

    type Module<T = any> = {
      _type: T;
      _key: string;
    } & T;

    type PageBase = SanityDocument<{
      title?: string;
      metadata: Metadata;
    }>;

    type Page = PageBase & {
      readonly _type: "page";
      modules?: Module[];
    };

    type BlogCategory = SanityDocument<{
      title: string;
    }>;

    type BlogPost = PageBase & {
      readonly _type: "blog.post";
      body: PortableTextBlock[];
      readTime: number;
      headings?: { style: string; text: string }[];
      categories: BlogCategory[];
      publishDate: string;
    };

    type Link = {
      readonly _type: "link";
      label: string;
      type: "internal" | "external";
      internal?: Page | BlogPost;
      external?: string;
      params?: string;
    };
    type CityPage = PageBase & {
      modules: Module[];
      _id: string;
      _rev: string;
      _type: "city.page";
      metadata: Metadata;
    };

    type Announcement = SanityDocument<{
      content: PortableTextBlock[];
      cta?: Link;
      start?: string;
      end?: string;
    }>;

    type CTA = {
      link?: Link;
      style?: string;
    };

    type LinkList = {
      readonly _type: "link.list";
      label: string;
      links?: Link[];
    };

    type Navigation = SanityDocument<{
      title: string;
      items?: (Link | LinkList)[];
    }>;

    type Site = SanityDocument<{
      title: string;
      logo: HeaderLogo;
      announcements?: Announcement[];
      copyright?: TypedObject;
      ctas?: CTA[];
      headerMenu?: Navigation;
      footerMenu?: Navigation;
      social?: Navigation;
      ogimage?: string;
    }>;

    type Testimonial = SanityDocument<{
      content: PortableTextBlock[];
      author?: {
        name: string;
        title?: string;
        image?: Image;
      };
    }>;

    type ClinicMetadata = Metadata & {
      name: string;
      address: string;
      clinicLocation: {
        location: string;
        locationTag: string;
      };
      services: Array<{
        serviceClinics: {
          serviceTag: string;
          service: string;
        };
      }>;
      phoneNumber: number;
      staff: string[];
      workingHours: Array<{
        dayDuration: {
          startDay: string;
          endDay: string;
        };
        duration: {
          start: string;
          end: string;
        };
      }>;
      website: Link;
    };

    type ClinicsPageBase = SanityDocument<{
      title?: string;
      metadata: ClinicMetadata;
    }>;

    type ClinicStaff = {
      clinicStaff: Array<{
        staffName: string;
      }>;
    };

    type ClinicsPage = PageBase &
      ClinicStaff & {
        readonly _type: "clinics.page";
        clinicImage: string;
        clinicStaff: ClinicStaff;
        name: string;
        address: string;
        description: string;
        clinicLocation: {
          location: string;
          locationTag: string;
        };

        services: Array<{
          subService: string[];
          serviceClinics: {
            serviceTag: string;
            service: string;
          };
          pricing?: Array<{
            currency?: "EUR" | "GBP" | "ALL";
            amount?: number;
          }>;
        }>;
        facilities: Array<{
          clinicFacility: {
            facility: string;
          };
        }>;
        phoneNumber: number;
        workingHours: Array<{
          dayDuration: {
            startDay: string;
            endDay: string;
          };
          duration: {
            start: string;
            end: string;
          };
        }>;
        website: Link;
      };
    type ServicesMetadata = Metadata & {
      name: string;
      service: string;
      serviceDescription: string;
    };

    type ServicesPageBase = SanityDocument<{
      title?: string;
      metadata: ServicesMetadata;
    }>;

    type ServicesPage = {
      modules?: Module[];
      _id: string;
      _rev: string;
      _type: "service.page";
      _createdAt: string;
      _updatedAt: string;
      name: string;
      services: string;
      ctaText: string;
      serviceDescription: string;
      image: Image;
      metadata: Metadata;
    };
    export type ServicesListingPage = PageBase & {
      metadata: Metadata;
      servicesList: Array<{
        _id: string;
        _rev: string;
        _type: "service.page";
        _createdAt: string;
        _updatedAt: string;
        name: string;
        services: string;
        ctaText: string;
        image: Image;
        serviceDescription: string;
        metadata: Metadata;
      }>;
    };
    export type ClinicsListingPage = PageBase & {
      metadata: Metadata;
      clinicsList: Array<{
        _id: string;
        _rev: string;
        _type: "clinics.page";
        _createdAt: string;
        _updatedAt: string;
        name: string;
        address: string;
        description: string;
        clinicLocation: {
          location: string;
          locationTag: string;
        };
        services: Array<{
          subService: string[];
          serviceClinics: {
            serviceTag: string;
            service: string;
          };
        }>;
        facilities: Array<{
          clinicFacility: {
            facility: string;
          };
        }>;
        phoneNumber: number;
        staff: Array<{
          name: string;
          job: string;
          imageUrl: string;
        }>;
        workingHours: Array<{
          dayDuration: {
            startDay: string;
            endDay: string;
          };
          duration: {
            start: string;
            end: string;
          };
        }>;
        website: Link;
        metadata: Metadata;
        image: Image;
      }>;
    };

    // objects
  }
}
