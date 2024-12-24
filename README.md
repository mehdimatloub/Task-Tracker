# Gestionnaire de Tâches

## Introduction
Ce projet est une application web permettant aux utilisateurs de planifier leurs tâches quotidiennes, de les organiser par catégories (Travail, Habitudes, etc.) et de suivre leur progression. Le design est moderne, responsive et conçu pour offrir une expérience utilisateur optimale.

---

## Technologies Utilisées

### Frontend
- **React.js** : Pour construire une interface utilisateur dynamique et réactive.
- **CSS3** : Pour le style et les animations.
- **Axios** : Pour les requêtes HTTP vers le backend.

### Backend
- **Django** : Framework backend pour gérer la logique métier.
- **Django Rest Framework** : Pour créer des endpoints API RESTful.
- **PostgreSQL** : Base de données relationnelle.

### Outils
- **Figma** : Pour la conception de l'interface utilisateur.
- **Postman** : Pour tester les endpoints API.


---

## Instructions d'Installation et d'Exécution

### Prérequis
- Node.js (version X.X ou supérieure)
- Python 3.10+
- PostgreSQL installé et configuré

### Installation

1. Créez un environnement virtuel et installez les dépendances :
   ```bash
   python -m venv env
   source env/bin/activate  # Windows : env\Scripts\activate
   pip install -r requirements.txt
   ```
2. Configurez la base de données PostgreSQL :
   - Modifiez `settings.py` avec vos informations PostgreSQL.
   ```bash
   python manage.py migrate
   ```
3. Lancez le serveur local :
   ```bash
   python manage.py runserver
   ```

#### Frontend

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Configurez l'URL de l'API backend dans le fichier `.env` :
   ```env
   REACT_APP_API_URL=http://127.0.0.1:8000/api/
   ```
3. Lancez le serveur local :
   ```bash
   npm start
   ```

---

## Liens Utiles

### Design Figma
https://www.figma.com/design/vkhb39kx0jefHs689PiIqC/T%C3%A2ches---FREE%2C-Daily-Task-Tracker-Mobile-App-UI-(Community)?node-id=2-1622&m=dev&t=i98b7x9cETH5GJBz-1



---

# Documentation Technique (Backend)

## Endpoints

### Tâches
1. **Liste des tâches**
   - **URL** : `/api/tasks/`
   - **Méthode** : `GET`
   - **Réponse** :
     ```json
     [
       {
         "id": 1,
         "title": "Email Check",
         "category": "Work",
         "completed": false
       },
       {
         "id": 2,
         "title": "Exercise",
         "category": "Habits",
         "completed": true
       }
     ]
     ```

2. **Créer une tâche**
   - **URL** : `/api/tasks/`
   - **Méthode** : `POST`
   - **Corps** :
     ```json
     {
       "title": "New Task",
       "category": "Work"
     }
     ```
   - **Réponse** :
     ```json
     {
       "id": 3,
       "title": "New Task",
       "category": "Work",
       "completed": false
     }
     ```

---

## Modèles de Base de Données

### Modèle Utilisateur
| Champ       | Type    | Description                 |
|-------------|---------|-----------------------------|
| id          | Integer | Identifiant unique          |
| username    | String  | Nom d'utilisateur           |
| email       | String  | Email de l'utilisateur      |
| password    | String  | Mot de passe (hashé)        |

### Modèle Tâche
| Champ        | Type    | Description                   |
|--------------|---------|-------------------------------|
| id           | Integer | Identifiant unique            |
| title        | String  | Titre de la tâche             |
| category     | String  | Catégorie (Work, Habits, etc.)|
| completed    | Boolean | Statut (terminée ou non)      |
| created_at   | Date    | Date de création              |
| updated_at   | Date    | Date de modification          |

### Les Interfaces 
<img width="959" alt="Capture d’écran 2024-12-19 230625" src="https://github.com/user-attachments/assets/666038ad-1bba-458c-9bff-4a2c05feb803" />
<img width="958" alt="Capture d’écran 2024-12-19 230644" src="https://github.com/user-attachments/assets/d003480e-1fee-4a4d-a035-f07b1ae39d48" />
<img width="959" alt="Capture d’écran 2024-12-19 230714" src="https://github.com/user-attachments/assets/001c4238-de76-4a49-87b4-b11d052edd76" />

