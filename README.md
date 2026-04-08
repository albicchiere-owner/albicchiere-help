# Albicchiere Help Center

Help center bilingue (IT/EN) basato su Docusaurus 3.

## Struttura del progetto

```
docs/                                           ← Articoli in inglese (lingua default)
  general/
  smart-dispenser/
  app/
  account/
  wine-knowledge/

i18n/
  it/
    docusaurus-plugin-content-docs/
      current/                                  ← Articoli in italiano (stessa struttura di docs/)
        general/
        smart-dispenser/
        app/
        account/
        wine-knowledge/
      current.json                              ← Etichette sidebar in italiano
    docusaurus-theme-classic/
      navbar.json                               ← Navbar in italiano
      footer.json                               ← Footer in italiano

sidebars.ts                                     ← Struttura sidebar (EN, tradotta via current.json)
docusaurus.config.ts                            ← Configurazione sito
```

---

## Setup locale (prima volta)

### Prerequisiti

- [Node.js 20+](https://nodejs.org/)
- [Git](https://git-scm.com/)

### 1. Clona la repo

```bash
git clone https://github.com/albicchiere/albicchiere-help.git
cd albicchiere-help
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Avvia il server di sviluppo

```bash
# Versione inglese (default)
npm start

# Versione italiana
npm start -- --locale it
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.
Il server si ricarica automaticamente al salvataggio.

---

## Gestire le traduzioni in italiano

Ogni articolo ha **due file**: uno in inglese (`docs/`) e uno in italiano (`i18n/it/...`).
I file devono avere lo stesso nome e lo stesso frontmatter `id`.

### Modificare un articolo esistente

- Modifica inglese → `docs/CATEGORIA/nome-articolo.md`
- Modifica italiano → `i18n/it/docusaurus-plugin-content-docs/current/CATEGORIA/nome-articolo.md`

### Aggiungere un nuovo articolo

#### 1. Crea il file inglese

```
docs/CATEGORIA/nome-articolo.md
```

Frontmatter obbligatorio:

```markdown
---
id: nome-articolo
title: Titolo Completo
sidebar_label: Titolo Breve
sidebar_position: 99
---
```

#### 2. Crea il file italiano

Stesso percorso relativo, dentro `i18n/it/docusaurus-plugin-content-docs/current/`:

```
i18n/it/docusaurus-plugin-content-docs/current/CATEGORIA/nome-articolo.md
```

Stesso frontmatter, contenuto tradotto in italiano.

#### 3. Aggiungi alla sidebar

Apri `sidebars.ts` e inserisci `'CATEGORIA/nome-articolo'` nell'array della categoria corretta.

#### 4. Verifica la traduzione dell'etichetta sidebar

Le etichette delle categorie sono in `i18n/it/docusaurus-plugin-content-docs/current.json`.
Se aggiungi una categoria nuova, rigeneralo con:

```bash
npm run write-translations -- --locale it
```

Poi aggiorna il campo `message` nel JSON generato.

### Tradurre navbar e footer

- `i18n/it/docusaurus-theme-classic/navbar.json`
- `i18n/it/docusaurus-theme-classic/footer.json`

Per rigenerare questi file se aggiungi voci alla navbar/footer:

```bash
npm run write-translations -- --locale it
```

---

## Workflow quotidiano

```bash
# 1. Apri il file che vuoi modificare
# 2. Salva — il browser si aggiorna automaticamente

# 3. Quando sei soddisfatto, pubblica
git add docs/ i18n/          # oppure specifica i file precisi
git commit -m "Update: nome articolo"
git push
```

Il sito viene ridistribuito automaticamente in ~2 minuti dopo il push.

---

## Deploy

Il deploy è automatico via GitHub Actions a ogni push su `main`.

**Primo setup GitHub Pages:**

1. Vai in **Settings** della repo → **Pages**
2. Source: **GitHub Actions**
3. Salva — il prossimo push attiverà il primo deploy

**Build manuale (verifica locale):**

```bash
npm run build
npm run serve   # anteprima del build su http://localhost:3000
```
