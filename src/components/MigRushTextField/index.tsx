import clsx from 'clsx'

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
> = ({ name, required, className, style, ...props }) => {
    return (
        <div className={clsx(classes.container, className)} style={style}>
            <input
                type="text"
                placeholder={`Enter a ${name.toLowerCase()}`}
                className={classes.textfield}
                {...props}
            />
            <label className={classes.label}>
                {name} {required && ' *'}
            </label>
        </div>
    )
}
