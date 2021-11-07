import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import { IconProp } from '@fortawesome/fontawesome-svg-core'

import clsx from 'clsx'

import classes from './mig-rush-button.module.scss'

export interface MigRushButtonProps extends Omit<FontAwesomeIconProps, 'icon'> {
    text?: string
    fontSize?: string
    round?: boolean
    rtl?: boolean
    icon?: IconProp
}

export const MigRushButton: React.VFC<MigRushButtonProps> = ({
    text,
    fontSize,
    icon,
    round,
    style,
    className,
    ...faIconProps
}) => {
    return (
        <button
            className={clsx(classes.migrushButton, className)}
            style={
                round
                    ? {
                          fontSize,
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '1.25rem',
                          ...style,
                      }
                    : { fontSize, ...style }
            }
        >
            {text && <p>{text}</p>}
            {icon && <FontAwesomeIcon icon={icon} {...faIconProps} />}
        </button>
    )
}
