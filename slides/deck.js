window.COURSE_DECK = [
  {
    id:'j1-ouverture',day:1,eyebrow:'J1 · Gestion de projet / Conception',hero:true,
    title:'Une agence.<br>Vos décisions.',subtitle:'DÉTOUR · voyages insolites & week-ends surprises',
    html:`<div class="hero-grid"><div class="poster"><h3>Le brief arrive aujourd'hui. Le produit reste à concevoir.</h3><span class="poster-mark">↗</span><span class="stamp">MISSION CLIENT · WEB3</span></div><div class="card-row"><div class="card orange"><small>Votre rôle</small><strong>Équipe prestataire</strong><p>Comprendre, proposer, arbitrer.</p></div><div class="card teal"><small>Mon rôle</small><strong>Client commanditaire</strong><p>Répondre, contredire, changer d'avis.</p></div></div></div>`,
  },
  {
    id:'j1-double-adn',day:1,eyebrow:'Le parcours',title:'Deux métiers. Un produit.',
    html:`<div class="two-up"><div class="card orange"><span class="icon">◇</span><small>4 jours</small><strong>Gestion de projet / Conception</strong><p>Besoin → système → arbitrage → livraison</p></div><div class="card teal"><span class="icon">◎</span><small>3 jours</small><strong>Agentique IA</strong><p>Modèle → outils → actions → contrôle</p></div></div>`,
  },
  {
    id:'j1-client',day:1,eyebrow:'Le commanditaire',title:'« Nos conseillers perdent du temps. »',
    html:`<div class="quote-card">« Chaque voyage surprise commence avec une envie vague. On cherche, on vérifie, on propose… puis le client change quelque chose. »<footer>Direction de l'agence DÉTOUR</footer></div>`,
  },
  {
    id:'j1-roles',day:1,eyebrow:'Qui sert-on ?',title:'Un client ≠ un utilisateur',
    html:`<div class="role-map"><div class="side"><div class="tile"><small>Commande</small><strong>Agence DÉTOUR</strong><p>Décide du besoin métier.</p></div><div class="tile"><small>Travail quotidien</small><strong>Conseillers</strong><p>Préparent et valident.</p></div></div><div class="center"><div><div style="font-size:62px;color:var(--orange)">↗</div><strong style="font-size:29px">Le service à concevoir</strong></div></div><div class="side"><div class="tile"><small>Expérience</small><strong>Voyageurs</strong><p>Demandent un séjour.</p></div><div class="tile"><small>Données & actions</small><strong>Fournisseurs simulés</strong><p>Offres et réservations.</p></div></div></div>`,
  },
  {
    id:'j1-brief-trous',day:1,eyebrow:'Réunion client',title:'Le brief a des trous.',
    html:`<div class="case-file"><div class="case-main"><div class="field"><b>Type de voyage</b><span>Week-end surprise</span></div><div class="field"><b>Budget</b><i>?</i></div><div class="field"><b>Validation</b><i>?</i></div><div class="field"><b>Qui utilise l'IA ?</b><i>?</i></div><div class="field"><b>En cas d'échec ?</b><i>?</i></div></div><div class="case-side"><span class="label">Votre première tâche</span><p>Posez les questions qui changent vraiment la conception.</p></div></div>`,
  },
  {
    id:'j1-entretien',day:1,eyebrow:'Atelier · entretien',title:'Le Product Owner rencontre le client.',
    html:`<div class="timeline"><div class="moment"><small>01 · ÉQUIPE</small>Préparer les questions</div><div class="moment"><small>02 · PO SEUL</small>Rencontrer le client</div><div class="moment"><small>03 · PO</small>Transmettre au groupe</div><div class="moment"><small>04 · ÉQUIPE</small>Reformuler le besoin</div></div>`,exercise:'../content/j1/DOSSIER_ETUDIANT.md',
  },
  {
    id:'j1-faits-hypotheses',day:1,eyebrow:"Après l'entretien",title:'Fait ou hypothèse ?',
    html:`<div class="two-up"><div class="card teal"><small>Confirmé par le client</small><strong>« Un conseiller valide avant réservation. »</strong></div><div class="card orange"><small>À vérifier</small><strong>« Le voyageur veut parler directement à l'IA. »</strong></div></div>`,
  },
  {
    id:'j1-carte',day:1,eyebrow:'Conception macro',title:"Dessinez l'environnement.",
    html:`<div class="swimlanes"><div class="lane"><b>Voyageur</b><span class="action">Exprime une envie</span><span>Reçoit une proposition</span><span class="action">Accepte ou refuse</span></div><div class="lane"><b>Conseiller</b><span>Complète le besoin</span><span class="system">Vérifie les offres</span><span class="action">Valide l'action</span></div><div class="lane"><b>Agent IA</b><span>Analyse la demande</span><span class="system">Consulte les outils</span><span>Propose un plan</span></div><div class="lane"><b>Fournisseur</b><span class="system">Expose des offres</span><span class="system">Retourne une disponibilité</span><span class="system">Enregistre une option</span></div></div>`,exercise:'../content/j1/DOSSIER_ETUDIANT.md',
  },
  {
    id:'j1-perimetre',day:1,eyebrow:'Périmètre',title:'Une première version tenable.',
    html:`<div class="boundary"><div class="zone"><strong>Maintenant</strong><span>+</span></div><div class="zone"><strong>Plus tard</strong><span>→</span></div><div class="zone"><strong>Hors périmètre</strong><span>×</span></div></div>`,exercise:'../content/j1/DOSSIER_ETUDIANT.md',
  },
  {
    id:'j1-criteres',day:1,eyebrow:"Critères d'acceptation",title:'« Ça marche » ne suffit pas.',
    html:`<div class="mini-ui"><div class="ui-head"><span>PROPOSITION #042</span><span>DÉTOUR</span></div><div class="ui-body"><div class="ui-line"><strong>Budget respecté</strong><span class="status">VÉRIFIABLE</span></div><div class="ui-line"><strong>Dates disponibles</strong><span class="status">VÉRIFIABLE</span></div><div class="ui-line"><strong>Validation conseiller</strong><span class="status">VÉRIFIABLE</span></div></div></div>`,
  },
  {
    id:'j1-agile',day:1,eyebrow:'Méthodes de travail',title:'La méthode dépend du terrain.',
    html:`<div class="three-up"><div class="card orange"><span class="icon">▦</span><strong>Scrum</strong><p>Objectif partagé et rythme court.</p></div><div class="card teal"><span class="icon">▤</span><strong>Kanban</strong><p>Flux visible et travail limité.</p></div><div class="card"><span class="icon">✳</span><strong>XP</strong><p>Tests, binômes, petits pas.</p></div></div>`,
  },
  {
    id:'j1-choix-methode',day:1,eyebrow:'Atelier · arbitrage',title:'Trois contextes. Trois choix ?',
    html:`<div class="three-up"><div class="card"><small>Cas A</small><strong>Demandes imprévues</strong><p>Chaque jour, une urgence différente.</p></div><div class="card"><small>Cas B</small><strong>Démo dans 2 semaines</strong><p>Équipe stable, objectif précis.</p></div><div class="card"><small>Cas C</small><strong>API encore inconnue</strong><p>Il faut apprendre avant de s'engager.</p></div></div>`,exercise:'../content/j1/DOSSIER_ETUDIANT.md',
  },
  {
    id:'j1-architecture',day:1,eyebrow:'Conception macro',title:'Quatre frontières à décider.',
    html:`<div class="flow"><div class="step"><span class="num">01</span><strong>Voyageur</strong></div><div class="step"><span class="num">02</span><strong>Application</strong></div><div class="step"><span class="num">03</span><strong>Agent IA</strong></div><div class="step"><span class="num">04</span><strong>Serveur offres</strong></div></div>`,
  },
  {
    id:'j1-main-humaine',day:1,eyebrow:'Pouvoir décisionnel',title:'Qui peut confirmer ?',
    html:`<div class="flow"><div class="step"><span class="num">IA</span><strong>Propose</strong></div><div class="step"><span class="num">SYSTÈME</span><strong>Vérifie</strong></div><div class="step"><span class="num">HUMAIN</span><strong>Valide</strong></div><div class="step"><span class="num">SERVEUR</span><strong>Enregistre</strong></div></div>`,
  },
  {
    id:'j1-livraison',day:1,eyebrow:'Fin de J1',title:'Votre décision devient le point de départ.',
    html:`<div class="three-up"><div class="card"><span class="icon">◈</span><strong>Carte du système</strong><p>Acteurs · flux · responsabilités</p></div><div class="card"><span class="icon">▣</span><strong>Périmètre v1</strong><p>Priorités · critères · inconnues</p></div><div class="card"><span class="icon">◇</span><strong>Registre des décisions</strong><p>Choix · raisons · vérification</p></div></div>`,
  },
  {
    id:'j2-ouverture',day:2,eyebrow:'J2 · Agentique IA',hero:true,title:'L’IA entre<br>dans l’agence.',subtitle:'Comprendre le modèle. Construire l’agent. Garder la main.',
    html:`<div class="hero-grid"><div class="poster" style="background:#083d45"><h3>Une réponse plausible n'est pas encore une réservation.</h3><span class="poster-mark" style="color:#7bd6c3">◎</span><span class="stamp">DÉTOUR · LABORATOIRE AGENTIQUE</span></div><div class="card teal"><small>La mission du jour</small><strong>Premier agent, premier outil</strong><p>Une donnée consultée. Une trace. Une décision expliquée.</p></div></div>`,
  },
  {
    id:'j2-demande',day:2,eyebrow:'Même demande, trois systèmes',title:'« Trouve un train disponible. »',
    html:`<div class="three-up"><div class="card"><small>Modèle seul</small><strong>« Il y en a sûrement. »</strong><p>Réponse probable.</p></div><div class="card"><small>Workflow</small><strong>Catalogue → filtre</strong><p>Étapes fixées d'avance.</p></div><div class="card teal"><small>Agent</small><strong>Choisit un outil</strong><p>Observe puis agit.</p></div></div>`,
  },
  {
    id:'j2-ia-carte',day:2,eyebrow:'Fondations',title:'De quoi parle-t-on ?',
    html:`<div class="three-up"><div class="card"><span class="icon">◌</span><strong>IA</strong><p>Famille de systèmes.</p></div><div class="card"><span class="icon">▥</span><strong>IA générative</strong><p>Produit un contenu.</p></div><div class="card teal"><span class="icon">✦</span><strong>Modèle de langage</strong><p>Prédit une suite de texte.</p></div></div>`,
  },
  {
    id:'j2-contexte',day:2,eyebrow:'Modèle de langage',title:'La réponse dépend du contexte.',
    html:`<div class="flow teal"><div class="step"><span class="num">01</span><strong>Instruction</strong></div><div class="step"><span class="num">02</span><strong>Données</strong></div><div class="step"><span class="num">03</span><strong>Modèle</strong></div><div class="step"><span class="num">04</span><strong>Réponse</strong></div></div>`,
  },
  {
    id:'j2-hallucination',day:2,eyebrow:'Cas · information manquante',title:'« 42 € » : d’où vient ce prix ?',
    html:`<div class="two-up"><div class="quote-card teal">« Le train coûte 42 € et part à 8h12. »<footer>Réponse du modèle sans accès au catalogue</footer></div><div class="card"><small>Preuve</small><strong>Aucun appel d’outil.</strong><p>Une phrase convaincante peut rester sans fondement.</p></div></div>`,exercise:'../content/j2/exercices-etudiants.md',
  },
  {
    id:'j2-sortie',day:2,eyebrow:'Sortie structurée',title:'Une forme lisible par le système.',
    html:`<div class="code-panel">{\n  <span class="dim">"destination"</span>: <span class="ok">"Nantes"</span>,\n  <span class="dim">"date"</span>: <span class="ok">"2026-11-07"</span>,\n  <span class="dim">"participants"</span>: <span class="hi">2</span>,\n  <span class="dim">"budget_eur"</span>: <span class="hi">300</span>\n}</div>`,
  },
  {
    id:'j2-workflow-agent',day:2,eyebrow:'Trois architectures',title:'Qui choisit la prochaine étape ?',
    html:`<div class="three-up"><div class="card"><small>Assistant</small><strong>Répond.</strong><p>Pas d'action externe.</p></div><div class="card"><small>Workflow</small><strong>Suit la route.</strong><p>Étapes prévues par le code.</p></div><div class="card teal"><small>Agent</small><strong>Choisit l'action.</strong><p>Dans des limites définies.</p></div></div>`,
  },
  {
    id:'j2-boucle',day:2,eyebrow:'Le cycle agentique',title:'Observer. Choisir. Agir. Vérifier.',
    html:`<div class="loop"><div class="node top">Objectif</div><div class="node right">Choix d’outil</div><div class="node bottom">Résultat</div><div class="node left">Nouvel état</div><div class="core">AGENT</div></div>`,
  },
  {
    id:'j2-outil',day:2,eyebrow:"Appel d'outil",title:'Le modèle propose. Le code exécute.',
    html:`<div class="flow teal"><div class="step"><span class="num">MODÈLE</span><strong>Demande une disponibilité</strong></div><div class="step"><span class="num">APPLICATION</span><strong>Vérifie l'appel</strong></div><div class="step"><span class="num">SERVEUR</span><strong>Retourne le résultat</strong></div></div>`,
  },
  {
    id:'j2-charte',day:2,eyebrow:"Charte IA · toute l'année",title:'La responsabilité reste humaine.',
    html:`<div class="card-row"><div class="card teal"><span class="icon">⊙</span><strong>Comprendre</strong></div><div class="card"><span class="icon">✓</span><strong>Vérifier</strong></div><div class="card"><span class="icon">◈</span><strong>Protéger</strong></div><div class="card"><span class="icon">↗</span><strong>Signaler</strong></div></div>`,exercise:'../content/charte-ia.md',
  },
  {
    id:'j2-charte-cas',day:2,eyebrow:'Charte · cas',title:'L’agent dit « Réservé ». Le serveur dit « Échec ».',
    html:`<div class="two-up"><div class="card orange"><small>Message affiché</small><strong>Votre voyage est confirmé.</strong></div><div class="card teal"><small>Réponse du serveur</small><strong>409 · Plus disponible</strong></div></div>`,
  },
  {
    id:'j2-architecture',day:2,eyebrow:"Architecture de l'agent",title:'Quelles portes lui ouvrir ?',
    html:`<div class="role-map"><div class="side"><div class="tile"><small>Entrée</small><strong>Demande voyageur</strong></div><div class="tile"><small>Règles</small><strong>Charte & permissions</strong></div></div><div class="center" style="background:#083d45"><div><div style="font-size:60px;color:#7bd6c3">◎</div><strong style="font-size:29px">Agent DÉTOUR</strong></div></div><div class="side"><div class="tile"><small>Lecture</small><strong>Offres & disponibilités</strong></div><div class="tile"><small>Validation</small><strong>Conseiller humain</strong></div></div></div>`,exercise:'../content/j2/exercices-etudiants.md',
  },
  {
    id:'j2-permissions',day:2,eyebrow:'Permissions',title:"Trois degrés d'action.",
    html:`<div class="three-up"><div class="card teal"><small>Libre</small><strong>Consulter</strong><p>Catalogue, prix, disponibilités.</p></div><div class="card orange"><small>Sous condition</small><strong>Poser une option</strong><p>Durée et budget contrôlés.</p></div><div class="card"><small>Validation</small><strong>Confirmer</strong><p>Décision du conseiller.</p></div></div>`,
  },
  {
    id:'j2-serveur',day:2,eyebrow:'Le serveur fictif',title:'Une donnée réelle… dans la simulation.',
    html:`<div class="mini-ui"><div class="ui-head"><span>API / CATALOGUE</span><span>DÉTOUR</span></div><div class="ui-body"><div class="ui-line"><strong>Train vers Nantes</strong><span>48 € / personne</span></div><div class="ui-line"><strong>Disponibilité</strong><span class="status">À VÉRIFIER</span></div><div class="ui-line"><strong>Réservation</strong><span>À VALIDER</span></div></div></div>`,
  },
  {
    id:'j2-atelier',day:2,eyebrow:'Atelier · premier agent',title:'Demande → outil → trace.',
    html:`<div class="flow teal"><div class="step"><span class="num">01</span><strong>Configurer OpenRouter</strong></div><div class="step"><span class="num">02</span><strong>Déclarer l’outil</strong></div><div class="step"><span class="num">03</span><strong>Lire la réponse</strong></div><div class="step"><span class="num">04</span><strong>Montrer la trace</strong></div></div>`,exercise:'../content/j2/exercices-etudiants.md',
  },
  {
    id:'j2-preuve',day:2,eyebrow:'Fin de J2',title:'Une preuve vaut plus qu’une promesse.',
    html:`<div class="three-up"><div class="card"><span class="icon">◈</span><strong>Contrat de l’agent</strong><p>Mission · limites · arrêt</p></div><div class="card teal"><span class="icon">◎</span><strong>Appel d’outil</strong><p>Donnée réellement consultée</p></div><div class="card"><span class="icon">▤</span><strong>Trace expliquée</strong><p>Choix · résultat · contrôle</p></div></div>`,
  }
];
