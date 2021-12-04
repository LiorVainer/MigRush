import clsx from 'clsx'

import classes from './mig-rush-text-field.module.scss'

export interface MigRushTextFieldProps {
    name?: string
    required?: boolean
}

export const MigRushTextField: React.VFC<
    MigRushTextFieldProps &
        React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >
> = ({ name, required, className, style, children, onBlur, ...props }) => {
    return (
        <div
            className={clsx(classes.migRushTextField, className)}
            style={style}
            onBlur={onBlur}
        >
            <input
                type="text"
                placeholder={name ? `Enter a ${name.toLowerCase()}` : ''}
                className={classes.textfield}
                {...props}
            ></input>
            <label className={classes.label}>
                {name} {required && ' *'}
            </label>
            {children}
        </div>
    )
}
