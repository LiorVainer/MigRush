import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import { MigRushTextField, MigRushTextFieldProps } from '../MigRushTextField'
import classes from './mig-rush-autocomplete.module.scss'

export interface MigRushAutocompleteProps {
    suggestions: string[]
}

interface AutocompleteState {
    activeSuggestion: number
    filteredSuggestions: string[]
    showSuggestions: boolean
    userInput: string
}

export const MigRushAutocomplete: React.VFC<
    MigRushAutocompleteProps & MigRushTextFieldProps
> = ({ suggestions, ...props }) => {
    const [state, setState] = useState<AutocompleteState>({
        activeSuggestion: -1,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: '',
    })

    console.log(state.activeSuggestion, state.userInput)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.currentTarget.value

        const filteredSuggestions = suggestions.filter(
            (suggestion: string) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        setState({
            activeSuggestion: state.activeSuggestion,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
        })
    }

    const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setState({
            activeSuggestion: -1,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
        })
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { activeSuggestion, filteredSuggestions } = state

        if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()

            setState({
                ...state,
                activeSuggestion: -1,
                showSuggestions: false,
                userInput:
                    state.activeSuggestion !== -1
                        ? filteredSuggestions[activeSuggestion]
                        : state.userInput,
            })
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            e.stopPropagation()
            if (activeSuggestion < 0) {
                return
            }
            setState({ ...state, activeSuggestion: activeSuggestion - 1 })
        }
        // User pressed the down arrow, increment the index
        else if (e.key === 'ArrowDown') {
            e.preventDefault()
            e.stopPropagation()
            if (activeSuggestion + 1 === filteredSuggestions.length) {
                return
            }
            setState({ ...state, activeSuggestion: activeSuggestion + 1 })
        }
    }

    let suggestionsListComponent

    console.log(state.filteredSuggestions.length)

    if (state.showSuggestions && state.userInput) {
        if (state.filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul
                    className={classes.suggestions}
                    onBlur={() =>
                        setState({
                            activeSuggestion: -1,
                            filteredSuggestions: [],
                            showSuggestions: false,
                            userInput: state.userInput,
                        })
                    }
                >
                    {state.filteredSuggestions.map((suggestion, index) => {
                        return (
                            <li
                                className={clsx(
                                    classes.suggestion,
                                    index === state.activeSuggestion &&
                                        classes.suggestionActive
                                )}
                                key={suggestion}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            suggestionsListComponent = (
                <div className={classes.noSuggestions}>
                    <em>No suggestions available.</em>
                </div>
            )
        }
    }

    return (
        <div
            className={classes.autocomplete}
            onBlur={() =>
                setState({
                    ...state,
                    activeSuggestion: -1,
                    showSuggestions: false,
                })
            }
        >
            <MigRushTextField
                {...props}
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                onFocus={() => setState({ ...state, showSuggestions: true })}
                value={state.userInput}
            >
                {state.userInput.length > 0 && (
                    <div className={classes.resetSection}>
                        <button
                            className={classes.resetButton}
                            onClick={() =>
                                setState({ ...state, userInput: '' })
                            }
                        >
                            <FontAwesomeIcon
                                className={classes.resetIcon}
                                icon={faTimes}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                )}
            </MigRushTextField>

            {suggestionsListComponent}
        </div>
    )
}
