import { useTranslation } from 'next-i18next'

export function LanguageDropDown({ posts }) {
    const { t } = useTranslation('common')

    return (
        <div className="group inline-block relative">
            <button
                className="text-gray-800 py-2 px-4 rounded inline-flex items-center"
            >
                <span className="mr-1">{t('language')}</span>
                <svg
                    className="fill-current h-4 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
            </button>
            <ul className="absolute hidden text-gray-800 pt-1 group-hover:block">
                <li className="">
                    <a
                        className="w-32 bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="/"
                    >{t('english')}</a
                    >
                </li>
                <li className="">
                    <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="/fr"
                    >{t('french')}</a
                    >
                </li>
                <li className="">
                    <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="/es"
                    >{t('spanish')}</a
                    >
                </li>
                <li className="">
                    <a
                        className="bg-gray-200 hover:bg-gray-400 text-xs break-words py-2 px-4 block whitespace-no-wrap"
                        href="https://github.com/katherinepeterson/readme.so/issues/new"
                        target="_blank"
                    >{t('translation-error')}</a
                    >
                </li>
            </ul>
        </div>
    )
}

