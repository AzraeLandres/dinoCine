# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

dinoCine/
├─ .expo/
│ ├─ types/
│ │ └─ router.d.ts
│ ├─ web/
│ │ └─ cache/
│ ├─ devices.json
│ └─ README.md
├─ .vscode/
│ └─ settings.json
├─ app/
│ ├─ (tabs)/
│ │ ├─ \_layout.tsx
│ │ ├─ addContent.tsx
│ │ ├─ content.tsx
│ │ ├─ home.tsx
│ │ ├─ settings.tsx
│ │ └─ wishlist.tsx
│ ├─ \_layout.tsx
│ └─ index.tsx
├─ assets/
│ ├─ fonts/
│ │ └─ Frogie-Regular.ttf
│ └─ images/
│ ├─ dinoCineLogo.png
│ └─ splash-icon.png
├─ scripts/
│ ├─ import_content.sql
│ ├─ import_contentGenre.sql
│ ├─ import_genres.sql
│ ├─ import_userContent.sql
│ ├─ importGenres.js
│ ├─ mapCsv.js
│ ├─ posterPath.js
│ ├─ reset-project.js
│ ├─ update_content_posters.sql
│ └─ watched.csv
├─ src/
│ ├─ components/
│ │ ├─ atoms/
│ │ │ ├─ LogoIcon.tsx
│ │ │ ├─ Poster.tsx
│ │ │ └─ TabBarIcon.tsx
│ │ ├─ layout/
│ │ ├─ molecules/
│ │ │ └─ Header.tsx
│ │ ├─ organisms/
│ │ └─ templates/
│ ├─ hooks/
│ ├─ lib/
│ │ └─ supabase.ts
│ └─ screens/
│ ├─ AddContentScreen.tsx
│ └─ HomeScreen.tsx
├─ .gitignore
├─ app.json
├─ babel.config.js
├─ eslint.config.js
├─ expo-env.d.ts
├─ global.css
├─ metro.config.js
├─ nativewind-env.d.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json
