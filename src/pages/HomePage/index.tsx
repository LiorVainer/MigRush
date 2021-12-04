import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { MigRushButton } from '../../components/MigRushButton'
import { MigRushTextField } from '../../components/MigRushTextField'

import classes from './home-page.module.scss'
import { MigRushAutocomplete } from '../../components/MigRushAutocomplete'

export interface HomePageProps {}

export const HomePage: React.VFC<HomePageProps> = () => {
    return (
        <div className={classes.homePage}>
            <MigRushButton
                className={classes.backButton}
                round
                icon={faArrowLeft}
            />
            <MigRushTextField
                name="Event Name"
                required
                placeholder="Enter an event name"
            />
            <MigRushTextField
                name="Event Type"
                required
                placeholder="Select event type"
            />
            <MigRushTextField name="Description" />
            <MigRushAutocomplete
                name="test"
                suggestions={['Oranges', 'Apples', 'Banana', 'Kiwi', 'Mango']}
            />
            <MigRushButton text="Create Event" />
        </div>
    )
}
