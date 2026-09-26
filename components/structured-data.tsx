type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const siteUrl = 'https://lakshyaclasses.in'

export function SiteStructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'EducationalOrganization',
            '@id': `${siteUrl}/#organization`,
            name: 'Lakshya Classes',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.png`,
            },
            image: `${siteUrl}/logo.png`,
            description:
              'Coaching institute for IIT JEE, NEET, board examinations, and Foundation programmes for Classes 6–10 in Ranchi, Patna, and Ara.',
            telephone: '+91 70501 47021',
            email: 'vm004501@gmail.com',
            founder: {
              '@type': 'Person',
              name: 'Vishal Kumar Mishra',
            },
            foundingDate: '2015',
            areaServed: [
              { '@type': 'City', name: 'Ranchi' },
              { '@type': 'City', name: 'Patna' },
              { '@type': 'City', name: 'Ara' },
            ],
            location: [
              {
                '@type': 'Place',
                name: 'Lakshya Classes Ranchi Centre 1',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    '1st Floor, H Square Building, Circular Road, Opp. Pranami Heights, Lalpur',
                  addressLocality: 'Ranchi',
                  postalCode: '834001',
                  addressCountry: 'IN',
                },
              },
              {
                '@type': 'Place',
                name: 'Lakshya Classes Ranchi Centre 2',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    '2nd Floor, Rohini Complex, Circular Road, Opp. Apsara Hotel, Lalpur',
                  addressLocality: 'Ranchi',
                  postalCode: '834001',
                  addressCountry: 'IN',
                },
              },
              {
                '@type': 'Place',
                name: 'Lakshya Classes Ara Centre',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Street No. 03, Near Tribhuwani Niwas, Maharaja Hata, Katira',
                  addressLocality: 'Ara',
                  postalCode: '802301',
                  addressCountry: 'IN',
                },
              },
              {
                '@type': 'Place',
                name: 'Lakshya Classes Patna Centre',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Saguna More, Danapur',
                  addressLocality: 'Patna',
                  addressCountry: 'IN',
                },
              },
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Lakshya Classes',
            publisher: { '@id': `${siteUrl}/#organization` },
            inLanguage: 'en-IN',
          },
        ],
      }}
    />
  )
}
