import LocationContainer from '@components/locations/LocationContainer'
import { longAustraliaOffice, latAustraliaOffice, longCanadaOffice, latCanadaOffice, latUKOffice, longUKOffice } from '@const/coor'

const LocationsPage = () => {
  return (
    <section className='classicalPage '>
      <LocationContainer
        country="Canada"
        office="Designo Central Office"
        adressStreet="3886 Wellington Street"
        adressCity="Toronto, Ontario M9C 3J5"
        telephone="P : +1 253-863-8967"
        mail="M : contact@designo.co"
        latitude={latCanadaOffice}
        longitude={longCanadaOffice}
      />
      <LocationContainer
        country="Australia"
        office="Designo AU Office"
        adressStreet="19 Balonne Street"
        adressCity="New South Wales 2443"
        telephone="P : (02) 6720 9092"
        mail="M : contact@designo.au"
        latitude={latAustraliaOffice}
        longitude={longAustraliaOffice}
        reverse={true}
      />
      <LocationContainer
        country="United Kingdom"
        office="Designo UK Office"
        adressStreet="13  Colorado Way" 
        adressCity="Rhyd-y-fro SA8 9GA"
        telephone="P : 078 3115 1400"
        mail="M : contact@designo.uk"
        latitude={latUKOffice}
        longitude={longUKOffice}
      />
    </section>
  )
}

export default LocationsPage
