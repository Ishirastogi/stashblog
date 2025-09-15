import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import babelParser from '@babel/eslint-parser'

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['build', 'eslint.config.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: globals.browser
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'warn',
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-extra-boolean-cast': 'off',
      'no-empty': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off'
    },
    settings: {
      react: { version: 'detect' }
    }
  }
]
