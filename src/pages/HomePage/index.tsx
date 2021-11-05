import { MigRushButton } from '../../components/MigRushButton'
import { MigRushTextField } from '../../components/MigRushTextField'

import classes from './home-page.module.scss'

export interface HomePageProps {}

export const HomePage: React.VFC<HomePageProps> = () => {
    return (
        <div className={classes.homePage}>
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
            <MigRushButton text="Create Event" />
        </div>
    )
}
