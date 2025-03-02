# 📘 Documentation Technique - CI/CD avec CircleCI & Vercel

## 🚀 Introduction
Ce projet est configuré avec **CircleCI** pour assurer l'intégration et le déploiement continus d'une application **Next.js**. Le pipeline effectue des vérifications de code, des tests automatisés et un déploiement final sur **Vercel**.

---

## 🏗️ Gestion des Branches
Le projet suit la méthodologie **GitFlow**, avec une structure claire :

- **develop** : Branche de développement utilisée pour intégrer les nouvelles fonctionnalités.
- **integration** : Environnement de test pour valider les modifications avant production.
- **main** : Branche principale, contenant la version stable en production.
- **feature/*** : Branches temporaires pour le développement de nouvelles fonctionnalités.
- **hotfix/*** : Branches dédiées aux corrections urgentes en production.

---

## 🔄 Workflow CI/CD

### 🛠 Étapes du pipeline
Le fichier `.circleci/config.yml` définit plusieurs étapes pour automatiser le cycle de vie du projet :

1. **Installation des dépendances** (`install_dependencies`)
2. **Analyse statique du code** (`code_analysis`)
3. **Compilation du projet** (`build_project`)
4. **Tests unitaires** (`unit_tests`)
5. **Tests d'intégration** (`integration_tests`)
6. **Déploiement sur Vercel** (`deploy_vercel`)

Chaque job est conditionné pour garantir un enchaînement logique et optimiser les performances.

### 🔍 Conditions d’exécution
- Les tests et le build sont exécutés sur toutes les branches.
- Le déploiement sur **Vercel** se déclenche uniquement lors de modifications sur la branche **main**.

---

## ⚙️ Configuration CircleCI

### 📁 Fichier `.circleci/config.yml`
Le fichier de configuration se trouve à la racine du projet, dans le dossier `.circleci/`. Il définit :

- L’exécution des jobs dans un environnement **Node.js**.
- L’utilisation de **Vercel CLI** pour le déploiement.
- L’enchaînement des étapes en fonction des dépendances et des branches concernées.

### 🔑 Variables d’environnement
Pour garantir le bon fonctionnement du déploiement, les variables suivantes doivent être définies dans CircleCI :

| Nom de la Variable | Description |
|--------------------|-------------|
| `VERCEL_TOKEN` | Jeton d’authentification Vercel |

La variable a été ajoutée dans **Project Settings > Environment Variables** sur CircleCI.

---

## 🚀 Déploiement sur Vercel
L’application est déployée automatiquement sur **Vercel** à chaque mise à jour de la branche **main**.

Si nécessaire, le déploiement peut être déclenché manuellement avec la commande suivante :

```bash
vercel --prod --token $VERCEL_TOKEN
```

Les autres branches ne permettent pas un déploiement sur Vercel.

---

## 📸 Suivi des Pipelines
Des captures d’écran des pipelines exécutés avec succès sont disponibles dans le dossier **documentation**.

---

## 🔗 Référentiel GitHub & Projet hébergé
Retrouvez le projet et son fichier de configuration **CircleCI** ici :
👉 **[GitHub Repository**](https://github.com/cristelleal/test_indus_next)

Retrouvez le projet hébergé sur **Vercel** ici :
👉 **[Lien Vercel**](https://testindusnext.vercel.app/)




