import classes from './mig-rush-text-field.module.scss'

export interface MigRushTextFieldProps {
    name: string
    required?: boolean
}

export const MigRushTextField: React.VFC<
    MigRushTextFieldProps &
        React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >
> = ({ name, required, ...props }) => {
    return (
        <div className={classes.container}>
            <p className={classes.header}>
                {name} {required && ' *'}
            </p>
            <input
                type="text"
                placeholder={`Enter a ${name.toLowerCase()}`}
                className={classes.textfield}
                {...props}
            />
        </div>
    )
}
