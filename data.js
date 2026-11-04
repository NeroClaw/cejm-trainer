/* CEJMI · BTS SIO · contenu du trainer
   Une section par thème du programme officiel (arrêté du 15/02/2018), plus méthode, rédaction et pièges.
   Les checks sont des indices de vérification, pas un juge : la réponse libre reste libre. */

const DATA = [

/* ============================== 00 ============================== */
{
  id: "00-methode",
  num: "00",
  title: "L’épreuve E4 en 4 heures",
  tag: "Méthode · tous les sujets",
  hot: true,
  intro: "Une seule épreuve écrite de 4 h, commune aux options SLAM et SISR, notée sur une grille de compétences et non sur une liste de connaissances. La note se gagne sur la structure de la réponse autant que sur le fond.",
  cours: `
  <h2>1. Le cadre officiel</h2>
  <table class="tbl">
    <caption>Ce que disent les annexes II et III de l’arrêté du 15 février 2018</caption>
    <thead><tr><th>Élément</th><th>Valeur</th></tr></thead>
    <tbody>
      <tr><td>Unité</td><td>U4, épreuve <strong>E4</strong> : culture économique, juridique et managériale pour l’informatique</td></tr>
      <tr><td>Forme</td><td>Écrite, <strong>4 heures</strong>, forme ponctuelle nationale</td></tr>
      <tr><td>Session 2026</td><td>Mercredi 20 mai 2026, 14 h - 18 h, métropole</td></tr>
      <tr><td>Statut</td><td>Unité <strong>commune aux deux options</strong> : le sujet ne porte ni sur le SLAM ni sur le SISR</td></tr>
      <tr><td>Support</td><td>Présentation contextualisée d’une entreprise, une base documentaire, une <strong>série de questions</strong></td></tr>
      <tr><td>Volume du dossier</td><td><strong>Une dizaine de pages au maximum</strong></td></tr>
      <tr><td>Attendu</td><td>« Pour chaque question, une réponse construite et argumentée est attendue »</td></tr>
      <tr><td>Correcteur</td><td>Un professeur qui enseigne la CEJM en section de technicien supérieur</td></tr>
    </tbody>
  </table>
  <div class="callout callout--warn">
    <span class="callout__label">Conséquence directe</span>
    <p>Dix pages maximum, trois disciplines à couvrir, aucune question de cours pure. Tout ce qui n’est pas dans les annexes doit venir de ta culture, mais tout ce qui est dans les annexes doit <strong>être utilisé</strong>. Une réponse qui ignore les chiffres fournis est une réponse perdue.</p>
  </div>

  <h2>2. Les six compétences évaluées</h2>
  <p>La grille ne dit pas « sait définir la croissance ». Elle dit que le candidat doit être capable de :</p>
  <ol>
    <li><strong>Analyser</strong> des situations auxquelles l’entreprise est confrontée.</li>
    <li><strong>Exploiter</strong> une base documentaire économique, juridique et managériale.</li>
    <li><strong>Proposer</strong> des solutions argumentées en mobilisant notions et méthodologies adaptées.</li>
    <li><strong>Établir un diagnostic</strong>, ou une partie de diagnostic, préparant une décision stratégique.</li>
    <li><strong>Prendre des décisions</strong> opérationnelles intégrant les trois dimensions.</li>
    <li><strong>Exposer</strong> des analyses et des propositions de manière cohérente et argumentée.</li>
  </ol>
  <p>La sixième est celle qui se joue sur la forme : plan apparent, phrases complètes, transitions, orthographe, numérotation. Elle est gratuite à aller chercher et très souvent mal exploitée.</p>

  <h2>3. Lire les questions avant les documents</h2>
  <p>Le réflexe inverse coûte vingt minutes et produit une copie descriptive. Les questions jouent le rôle de <strong>filtre de lecture</strong> : elles disent quel tableau regarder, quel article de loi chercher, quel paragraphe du contrat décortiquer.</p>
  <ol>
    <li>Lis les questions en entier, une seule fois, sans écrire.</li>
    <li>Sur le brouillon, note pour chacune : <strong>éco</strong>, <strong>droit</strong> ou <strong>management</strong>, plus l’annexe concernée.</li>
    <li>Lis les annexes citées dans cet ordre, en surlignant ce qui répond.</li>
    <li>Les annexes non citées servent de contexte : tu les survoles à la fin, si le temps le permet.</li>
  </ol>
  <p><strong>Repérer la discipline</strong> est un réflexe mécanique, il suffit d’observer le verbe et l’objet :</p>
  <table class="tbl">
    <caption>Signaux de reconnaissance</caption>
    <thead><tr><th>Signal dans la question</th><th>Discipline</th></tr></thead>
    <tbody>
      <tr><td>« qualifier », « clause », « validité », « responsabilité », « rupture »</td><td>Droit</td></tr>
      <tr><td>« calculer », « formation du prix », « externalités », « politique économique »</td><td>Économie</td></tr>
      <tr><td>« diagnostic », « parties prenantes », « finalité », « structure », « décision »</td><td>Management</td></tr>
      <tr><td>« analysez les conséquences pour l’entreprise »</td><td>Les trois : commence par la discipline dominante, ouvre sur les autres</td></tr>
    </tbody>
  </table>

  <h2>4. La structure de réponse qui rapporte</h2>
  <p>Un seul moule, valable dans les trois disciplines, à adapter au champ :</p>
  <pre class="codeblock"><code class="lang-text">1. QUALIFICATION   ce dont on parle, avec le mot du programme
                   (contrat de prestation de service, vice du consentement,
                   politique structurelle, externalité négative, DAS)

2. REGLE           la règle mobilisée, énoncée AVANT d'être appliquée
                   (les conditions de validité du contrat supposent un
                   consentement non vicié, une capacité, un contenu licite)

3. APPLICATION     les faits du dossier, cités entre guillemets
                   (annexe 2 : le client signe sous menace de perdre
                   son unique marché)

4. CONCLUSION      la conséquence juridique, économique ou managériale
                   (le contrat est annulable pour violence économique)</code></pre>
  <div class="callout callout--key">
    <span class="callout__label">Le réflexe qui creuse l’écart</span>
    <p>La règle s’énonce <strong>avant</strong> l’application, jamais après. Le correcteur cherche une démonstration, pas une intuition confirmée par le texte. Deux lignes de règle plus deux lignes d’application valent mieux que six lignes de paraphrase.</p>
  </div>

  <h2>5. Gestion des 4 heures</h2>
  <table class="tbl">
    <caption>Découpage indicatif, à écrire sur le brouillon avant de commencer</caption>
    <thead><tr><th>Créneau</th><th>Activité</th></tr></thead>
    <tbody>
      <tr><td>0 h 00 - 0 h 15</td><td>Lecture des questions, repérage discipline et annexes, budget par question</td></tr>
      <tr><td>0 h 15 - 0 h 25</td><td>Lecture active des annexes citées, surlignage</td></tr>
      <tr><td>0 h 25 - 1 h 30</td><td>Première moitié des questions, dans l’ordre du sujet</td></tr>
      <tr><td>1 h 30 - 3 h 00</td><td>Deuxième moitié</td></tr>
      <tr><td>3 h 00 - 3 h 40</td><td>Questions bloquantes, réponses courtes mais complètes</td></tr>
      <tr><td>3 h 40 - 3 h 50</td><td>Relecture ciblée : chaque « justifier » a une justification, chaque calcul a son unité</td></tr>
      <tr><td>3 h 50 - 4 h 00</td><td>Aucune question vide, numérotation homogène, orthographe</td></tr>
    </tbody>
  </table>
  <p><strong>Règle de secours :</strong> une question bloquante se traite en trois lignes et on avance. Une question vide rapporte zéro et abîme la compétence « exposer », qui se note sur l’ensemble de la copie.</p>
  <div class="callout callout--warn">
    <span class="callout__label">Piège de salle</span>
    <p>Rédiger au fil de la lecture des annexes, sans avoir lu les questions, produit du commentaire de document. Le correcteur lit « le document montre que le chiffre d’affaires progresse de 12 % » et ne coche aucune case, parce qu’il attendait « le taux de croissance s’établit à 12 %, ce qui traduit une croissance soutenue mais inférieure à celle du marché ».</p>
  </div>
  `,
  cards: [
    { id: "m1", q: "Par quoi commence-t-on quand on reçoit le sujet ?", a: "Par la <strong>lecture des questions</strong>, avant les documents. Elles servent de filtre : elles disent quelles annexes ouvrir et sous quel angle les lire." },
    { id: "m2", q: "Combien de pages fait le dossier, et qu’est-ce que cela implique ?", a: "Une <strong>dizaine de pages au maximum</strong>. Donc pas de place pour la paraphrase : chaque ligne doit servir, et une réponse qui ignore les chiffres fournis est une réponse perdue." },
    { id: "m3", q: "Quelles sont les six compétences évaluées par le référentiel ?", a: "<ol><li>Analyser une situation d’entreprise.</li><li>Exploiter une base documentaire.</li><li>Proposer des solutions argumentées.</li><li>Établir un diagnostic.</li><li>Prendre des décisions opérationnelles.</li><li>Exposer de manière cohérente et argumentée.</li></ol>" },
    { id: "m4", q: "Quelle est la structure de réponse attendue, dans l’ordre ?", a: "<strong>Qualification</strong> (le mot du programme) puis <strong>règle</strong> (énoncée avant d’être appliquée) puis <strong>application</strong> aux faits du dossier, cités, puis <strong>conclusion</strong> (conséquence juridique, économique ou managériale)." },
    { id: "m5", q: "Comment savoir si une question relève de l’économie, du droit ou du management ?", a: "Au verbe et à l’objet. Qualifier, clause, validité, responsabilité, rupture : droit. Calculer, prix, externalités, politique : économie. Diagnostic, parties prenantes, finalité, décision : management." },
    { id: "m6", q: "Une question vaut 4 points. Combien d’idées écrire ?", a: "Environ <strong>quatre idées distinctes</strong>, une par ligne numérotée. Le correcteur coche des cases : quatre lignes donnent quatre occasions de cocher, un paragraphe compact n’en donne qu’une." },
    { id: "m7", q: "Que faire d’une question sur laquelle on bloque ?", a: "Trois lignes structurées (qualification, règle, application rapide) et on avance. Une question vide coûte davantage qu’une question imparfaite." },
    { id: "m8", q: "Pourquoi l’épreuve est-elle commune aux options SLAM et SISR ?", a: "L’unité U4 est <strong>commune aux deux options</strong>. Le sujet porte sur une entreprise et son environnement, jamais sur une technologie. Aucun dossier purement développement ou purement réseau." },
    { id: "m9", q: "Combien de temps pour la relecture, et sur quoi porte-t-elle ?", a: "Dix minutes ciblées : chaque « justifier » contient une justification, chaque calcul porte son unité (euros, %, points de pourcentage), aucune question n’est vide." },
    { id: "m10", q: "Le correcteur est-il un spécialiste de l’informatique ?", a: "Non : c’est un <strong>professeur de CEJM</strong>. Il note la rigueur de la démonstration économique, juridique ou managériale, pas la pertinence technique de la solution informatique." }
  ],
  ateliers: [
    {
      id: "at-methode-plan",
      title: "Construis ton plan de 4 heures",
      lang: "text",
      prompt: `<p>Le sujet annonce 240 minutes, 14 questions et un dossier de 9 pages dont 6 annexes.</p>
      <p>Écris ton découpage minute par minute : lecture, lecture active des annexes, rédaction, questions bloquantes, relecture. Termine par une <strong>règle de secours</strong> : ce que tu abandonnes si trente minutes manquent.</p>`,
      starter: `00:00 - 00:15  Lecture des questions, repérage discipline et annexes
00:15 - `,
      model: `00:00 - 00:15  Lecture des 14 questions, repérage discipline (éco / droit / management)
                et de l'annexe citée par chacune. Budget : 240 min pour 14 questions,
                soit environ 16 min par question, pondéré par les points.

00:15 - 00:25  Lecture active des 6 annexes citées : surlignage des chiffres, des dates,
                des clauses et des citations utilisables.

00:25 - 01:30  Questions 1 à 6, dans l'ordre du sujet. Une idée par ligne numérotée.
01:30 - 02:35  Questions 7 à 12.
02:35 - 03:05  Questions 13 et 14, les plus lourdes : diagnostic puis décision.

03:05 - 03:40  Marge : question bloquante traitée en trois lignes, calcul à refaire,
                clause mal identifiée.

03:40 - 03:50  Relecture ciblée : chaque "justifier" a une justification, chaque calcul
                porte son unité, chaque réponse juridique cite sa règle.

03:50 - 04:00  Aucune question vide, numérotation homogène, orthographe.

Règle de secours si 30 minutes manquent : je sacrifie la relecture étendue, puis les
questions à 2 points déjà partiellement traitées. Je ne sacrifie jamais la conclusion
d'une réponse juridique : sans conséquence juridique, la réponse est comptée comme
non aboutie.`,
      checks: [
        { label: "La lecture des questions est placée avant la lecture des annexes", test: /lecture des (14 )?questions/i },
        { label: "Le temps est budgété en minutes (créneaux horodatés)", test: /\d{2}:\d{2}\s*-\s*\d{2}:\d{2}/ },
        { label: "Une marge pour les questions bloquantes est prévue", test: /bloquante|marge/i },
        { label: "La relecture porte sur des critères précis", test: /relecture/i }
      ]
    },
    {
      id: "at-methode-discipline",
      title: "Classer six questions par discipline",
      lang: "text",
      prompt: `<p>Pour chaque question, indique la discipline dominante (économie, droit ou management) et la <strong>notion du programme</strong> à mobiliser. Une ligne par question.</p>
      <ol>
        <li>« Identifiez les parties prenantes de l’entreprise et précisez leurs attentes respectives. »</li>
        <li>« Le contrat conclu avec le fournisseur est-il valable ? Justifiez. »</li>
        <li>« Calculez le taux de marge sur coûts variables du nouveau produit. »</li>
        <li>« Montrez que l’entreprise subit une externalité négative du fait de son implantation. »</li>
        <li>« Le salarié peut-il refuser la modification de son lieu de travail ? »</li>
        <li>« Proposez une modalité de croissance adaptée à l’objectif annoncé. »</li>
      </ol>`,
      starter: `1. management : parties prenantes
2. `,
      model: `1. management : parties prenantes primaires et secondaires, attentes et contre-pouvoirs
2. droit : formation du contrat et conditions de validité (consentement, capacité, contenu licite et certain)
3. économie / gestion : structure de coûts, marge sur coût variable, seuil de rentabilité
4. économie : externalités négatives, coût social, internalisation
5. droit : modification du contrat de travail contre modification des conditions de travail
6. management : modalités de croissance (organique, externe, conjointe) et avantage concurrentiel

Contrôle : chaque ligne contient une discipline et une notion nommée du programme.
Une réponse du type "c'est du droit" sans notion ne rapporte aucun point.`,
      checks: [
        { label: "Les trois disciplines sont nommées", test: /droit[\s\S]*management|management[\s\S]*droit/i },
        { label: "La question 2 est rattachée à la validité ou à la formation du contrat", test: /validité du contrat|formation du contrat/i },
        { label: "La question 4 est rattachée aux externalités", test: /externalit/i },
        { label: "La question 5 distingue contrat et conditions de travail", test: /conditions? de travail/i },
        { label: "La question 6 cite une modalité de croissance", test: /croissance (organique|externe|conjointe)|conjointe|organique/i }
      ]
    }
  ]
},

/* ============================== 01 ============================== */
{
  id: "01-integration",
  num: "01",
  title: "L’intégration de l’entreprise dans son environnement",
  tag: "Thème 1 du programme",
  hot: true,
  intro: "Le thème le plus fréquent, et le plus mélangé : la même entreprise sert de cas à une question d’économie (marché, externalités), une question de droit (contrat) et une question de management (finalités, performance).",
  cours: `
  <h2>1. Les agents économiques et leurs relations</h2>
  <table class="tbl">
    <caption>Quatre agents, quatre fonctions</caption>
    <thead><tr><th>Agent</th><th>Fonction</th><th>Relation typique avec l’entreprise</th></tr></thead>
    <tbody>
      <tr><td><strong>Ménages</strong></td><td>Consomment, épargnent, offrent leur travail</td><td>Clients, salariés, apporteurs de capitaux</td></tr>
      <tr><td><strong>Entreprises</strong></td><td>Produisent des biens et services, investissent</td><td>Fournisseurs, sous-traitants, concurrents, partenaires</td></tr>
      <tr><td><strong>Banques</strong></td><td>Collectent l’épargne, accordent des crédits, créent de la monnaie</td><td>Financement de l’exploitation et de l’investissement</td></tr>
      <tr><td><strong>État et administrations</strong></td><td>Produisent des services collectifs, prélèvent, redistribuent, régulent</td><td>Fiscalité, subventions, marchés publics, normes</td></tr>
      <tr><td><strong>Reste du monde</strong></td><td>Échange avec l’économie nationale</td><td>Importations, exportations, investissements étrangers</td></tr>
    </tbody>
  </table>
  <p>Les échanges entre agents se font sur des <strong>marchés</strong> (biens et services, travail, capitaux) et donnent lieu à des <strong>flux réels</strong> (biens, travail) et des <strong>flux monétaires</strong> en sens inverse. Une question sur le circuit ne demande pas de le réciter : elle demande d’identifier qui finance qui, et à quel prix.</p>

  <h2>2. Le marché et la concurrence</h2>
  <p>Un marché se définit par trois éléments : un <strong>objet</strong> (le bien ou le service échangé), une <strong>étendue géographique</strong>, et un <strong>prix</strong> qui résulte de la confrontation de l’offre et de la demande. Le prix d’équilibre est celui qui égalise les quantités offertes et demandées.</p>
  <table class="tbl">
    <caption>Structures de marché, du plus concurrentiel au moins concurrentiel</caption>
    <thead><tr><th>Structure</th><th>Nombre d’offreurs</th><th>Pouvoir sur le prix</th></tr></thead>
    <tbody>
      <tr><td>Concurrence pure et parfaite</td><td>Très nombreux</td><td>Aucun : le prix s’impose (<em>price taker</em>)</td></tr>
      <tr><td>Concurrence monopolistique</td><td>Nombreux, produits différenciés</td><td>Faible, par la différenciation (marque, qualité)</td></tr>
      <tr><td>Oligopole</td><td>Quelques-uns</td><td>Fort, avec risque d’entente</td></tr>
      <tr><td>Monopole</td><td>Un seul</td><td>Très fort, encadré par le droit de la concurrence</td></tr>
    </tbody>
  </table>
  <p>Les cinq conditions de la concurrence pure et parfaite, à citer si la question porte sur l’écart au modèle : <strong>atomicité</strong> (beaucoup d’offreurs et de demandeurs), <strong>homogénéité</strong> des produits, <strong>libre entrée et sortie</strong>, <strong>transparence</strong> de l’information, <strong>mobilité</strong> des facteurs.</p>
  <p><strong>Concurrence et coopération ne s’excluent pas.</strong> Deux entreprises concurrentes peuvent coopérer sur un projet de recherche, un groupement momentané d’entreprises, une norme commune. La coopération porte souvent sur ce qui coûte trop cher à porter seul, la concurrence sur ce qui reste différenciant.</p>

  <h2>3. Barrières à l’entrée et asymétrie d’information</h2>
  <ul>
    <li><strong>Barrières structurelles</strong> : économies d’échelle, intensité capitalistique, effet d’expérience, accès aux ressources.</li>
    <li><strong>Barrières réglementaires</strong> : licence, agrément, norme technique obligatoire, protection par brevet.</li>
    <li><strong>Barrières stratégiques</strong> : prix prédateur, saturation des canaux de distribution, verrouillage par les coûts de changement.</li>
  </ul>
  <p>L’<strong>asymétrie d’information</strong> existe quand une partie en sait plus que l’autre. Deux conséquences à ne jamais confondre :</p>
  <table class="tbl">
    <caption>Les deux visages de l’asymétrie</caption>
    <thead><tr><th>Notion</th><th>Quand</th><th>Exemple</th></tr></thead>
    <tbody>
      <tr><td><strong>Sélection adverse</strong> (anti-sélection)</td><td>Avant le contrat : on ne connaît pas la qualité de ce qu’on achète</td><td>Un client ne peut pas juger la qualité d’un prestataire avant de signer</td></tr>
      <tr><td><strong>Aléa moral</strong></td><td>Après le contrat : le comportement change une fois le contrat signé</td><td>Une fois la maintenance sous-traitée, le prestataire réduit sa vigilance</td></tr>
    </tbody>
  </table>
  <p>Les <strong>signaux</strong> qui réduisent l’asymétrie : garantie, certification, label, référence clients, réputation en ligne, audit, essai gratuit, clause de pénalité. Le droit répond par des obligations d’information précontractuelle.</p>

  <h2>4. Les externalités</h2>
  <p>Une <strong>externalité</strong> est un effet de l’activité d’un agent sur le bien-être d’un autre, sans compensation monétaire par le marché. Elle est <strong>négative</strong> quand elle impose un coût à un tiers (nuisances, pollution, congestion), <strong>positive</strong> quand elle procure un avantage gratuit (formation, recherche, réseau).</p>
  <p>Conséquence économique : le prix de marché ne reflète plus le coût social. En externalité négative, l’entreprise produit trop parce qu’elle ne paie pas le dommage. Les instruments d’<strong>internalisation</strong> : taxe, subvention, réglementation, norme, marché de droits à polluer, accord volontaire.</p>
  <div class="callout callout--warn">
    <span class="callout__label">Confusion coûteuse</span>
    <p>Une externalité n’est ni un coût interne ni une charge comptable. Si l’entreprise paie, ce n’est plus une externalité : c’est une charge internalisée. La question dit souvent « quel est le coût supporté par la collectivité », pas par l’entreprise.</p>
  </div>

  <h2>5. Banques et marché financier</h2>
  <ul>
    <li><strong>Financement indirect (intermédié)</strong> : la banque collecte l’épargne et accorde un crédit. Elle porte le risque et rémunère la transformation.</li>
    <li><strong>Financement direct (désintermédié)</strong> : l’entreprise émet des titres sur le marché financier. <strong>Action</strong> : part de capital, pas de remboursement, dividende aléatoire. <strong>Obligation</strong> : dette, remboursement à l’échéance, intérêt contractuel.</li>
    <li>Le marché <strong>primaire</strong> est celui de l’émission, le marché <strong>secondaire</strong> celui de la revente : seul le primaire finance l’entreprise.</li>
  </ul>

  <h2>6. Le contrat : formation, validité, effets</h2>
  <p><strong>Formation.</strong> Des pourparlers, puis une offre (ferme, précise, adressée), puis une acceptation (pure et simple : une acceptation modifiée vaut contre-proposition). La rencontre de l’offre et de l’acceptation forme le contrat, sauf si la loi impose un écrit.</p>
  <p><strong>Validité.</strong> Le code civil pose quatre conditions cumulatives : le <strong>consentement</strong> des parties, leur <strong>capacité</strong> de contracter, un <strong>contenu licite et certain</strong>, et l’absence de vice du consentement.</p>
  <table class="tbl">
    <caption>Les trois vices du consentement</caption>
    <thead><tr><th>Vice</th><th>Définition</th><th>Sanction</th></tr></thead>
    <tbody>
      <tr><td><strong>Erreur</strong></td><td>Fausse représentation de la réalité ; erreur sur la substance ou sur la personne en cas de contrat intuitu personae</td><td>Nullité relative</td></tr>
      <tr><td><strong>Dol</strong></td><td>Manœuvres, mensonges ou dissimulation destinés à tromper</td><td>Nullité relative</td></tr>
      <tr><td><strong>Violence</strong></td><td>Contrainte physique ou morale, y compris la violence économique</td><td>Nullité relative</td></tr>
    </tbody>
  </table>
  <p><strong>Effets.</strong> Le contrat tient lieu de loi entre les parties (<em>force obligatoire</em>), il ne produit effet qu’entre elles (<em>effet relatif</em>), et il doit être exécuté de bonne foi. L’<strong>inexécution</strong> ouvre plusieurs voies : exécution forcée, réduction du prix, résolution, dommages et intérêts.</p>
  <p><strong>Clauses à savoir repérer dans un contrat fourni en annexe :</strong> durée, prix et révision, exclusivité, non-concurrence, confidentialité, pénalité, résiliation, responsabilité, force majeure, droit applicable et juridiction compétente.</p>

  <h2>7. Finalités, parties prenantes, logiques, performance</h2>
  <p><strong>Trois finalités</strong> à distinguer systématiquement : <strong>économique</strong> (produire et dégager un résultat, assurer la survie), <strong>sociale</strong> (emploi, conditions de travail, rémunération), <strong>sociétale</strong> (impact environnemental et territorial, éthique).</p>
  <table class="tbl">
    <caption>Deux logiques de direction</caption>
    <thead><tr><th>Logique entrepreneuriale</th><th>Logique managériale</th></tr></thead>
    <tbody>
      <tr><td>Créer, innover, prendre le risque</td><td>Gérer, optimiser, pérenniser</td></tr>
      <tr><td>Entrepreneur propriétaire, décision rapide</td><td>Dirigeant salarié, décision collégiale et outillée</td></tr>
      <tr><td>Vision et opportunité</td><td>Ressources, compétences, contrôle</td></tr>
      <tr><td>Incertitude assumée</td><td>Rentabilité exigée par les apporteurs de capitaux</td></tr>
    </tbody>
  </table>
  <p>Les <strong>parties prenantes primaires</strong> (salariés, clients, fournisseurs, apporteurs de capitaux) sont indispensables au fonctionnement ; les <strong>secondaires</strong> (riverains, associations, collectivité, presse) influencent l’image et peuvent devenir des <strong>contre-pouvoirs</strong>.</p>
  <p><strong>Performance</strong> : économique (valeur ajoutée, résultat, productivité), financière (rentabilité, structure de financement), commerciale (part de marché), sociale, sociétale. Un indicateur isolé ne prouve rien : la copie doit comparer.</p>
  <div class="callout callout--key">
    <span class="callout__label">Trois chiffres à ne pas confondre</span>
    <p><strong>Chiffre d’affaires</strong> = ventes. <strong>Valeur ajoutée</strong> = production moins consommations intermédiaires. <strong>Résultat</strong> = produits moins charges. Une entreprise peut afficher un chiffre d’affaires en hausse et un résultat en baisse : c’est une réponse, pas une contradiction.</p>
  </div>
  `,
  cards: [
    { id: "t1a", q: "Quels sont les principaux agents économiques en relation avec l’entreprise ?", a: "Les <strong>ménages</strong> (clients, salariés, épargnants), les <strong>entreprises</strong> (fournisseurs, concurrents, partenaires), les <strong>banques</strong> (financement), l’<strong>État et les administrations</strong> (prélèvements, services collectifs, normes), et le <strong>reste du monde</strong> (échanges extérieurs)." },
    { id: "t1b", q: "Quelles sont les cinq conditions de la concurrence pure et parfaite ?", a: "<strong>Atomicité</strong> (multiplicité des offreurs et demandeurs), <strong>homogénéité</strong> des produits, <strong>libre entrée et sortie</strong>, <strong>transparence</strong> de l’information, <strong>mobilité</strong> des facteurs de production." },
    { id: "t1c", q: "Trois familles de barrières à l’entrée", a: "<ol><li><strong>Structurelles</strong> : économies d’échelle, intensité capitalistique, effet d’expérience.</li><li><strong>Réglementaires</strong> : licence, agrément, norme obligatoire, brevet.</li><li><strong>Stratégiques</strong> : prix prédateur, verrouillage des canaux, coûts de changement.</li></ol>" },
    { id: "t1d", q: "Sélection adverse et aléa moral : quelle différence ?", a: "<strong>Sélection adverse</strong> : avant le contrat, on ne connaît pas la qualité de ce qu’on achète (le bon client est celui qui coûte cher). <strong>Aléa moral</strong> : après le contrat, le comportement de l’une des parties change parce qu’elle n’est plus surveillée." },
    { id: "t1e", q: "Qu’est-ce qu’une externalité négative, et comment l’internaliser ?", a: "Un effet défavorable subi par un tiers sans compensation monétaire : le prix de marché est inférieur au coût social, donc la production est excessive. Internalisation par taxe, norme, redevance, marché de droits ou accord volontaire." },
    { id: "t1f", q: "Différence entre financement direct et financement intermédié", a: "<strong>Intermédié</strong> : la banque collecte l’épargne et prête, elle porte le risque. <strong>Direct</strong> : l’entreprise émet des actions ou des obligations achetées par les investisseurs sur le marché financier." },
    { id: "t1g", q: "Action ou obligation : laquelle dilue le capital ?", a: "L’<strong>action</strong> est une part de capital : elle dilue le pouvoir et la valeur, sans remboursement, avec un dividende variable. L’<strong>obligation</strong> est une dette : remboursement et intérêt, aucune dilution." },
    { id: "t1h", q: "Quelles sont les conditions de validité d’un contrat ?", a: "Le <strong>consentement</strong> des parties, leur <strong>capacité</strong>, un <strong>contenu licite et certain</strong> et l’absence de vice du consentement (erreur, dol, violence). Y manquer ouvre la nullité relative." },
    { id: "t1i", q: "Quelle est la sanction d’un vice du consentement ?", a: "La <strong>nullité relative</strong> du contrat, à la demande de la victime, avec possibilité de dommages et intérêts. Distinction avec la nullité absolue, qui sanctionne la violation d’une règle d’intérêt général et peut être demandée par tout intéressé." },
    { id: "t1j", q: "Logique entrepreneuriale et logique managériale : trois oppositions", a: "<ol><li>Créer et innover contre gérer et optimiser.</li><li>Propriétaire décideur contre dirigeant salarié.</li><li>Risque assumé contre rentabilité exigée par les apporteurs de capitaux.</li></ol>" },
    { id: "t1k", q: "Cinq composantes de la performance", a: "Économique (valeur ajoutée, résultat), financière (rentabilité), commerciale (part de marché), sociale (emploi, conditions de travail), sociétale (environnement, territoire)." },
    { id: "t1l", q: "Qu’est-ce qu’un contre-pouvoir dans l’analyse des parties prenantes ?", a: "Une partie prenante capable d’imposer une contrainte à la décision de l’entreprise sans en être dépendante : association, presse, collectivité, syndicat, autorité de régulation. Elle pèse par la réputation ou la règle, pas par le contrat." }
  ],
  ateliers: [
    {
      id: "at-t1-contrat",
      title: "Qualifier la formation et la validité d’un contrat",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> La société ISR Conseil, éditeur d’un logiciel de gestion, négocie avec un client, la SARL Toitures Durand. Après trois rendez-vous, ISR Conseil envoie une proposition chiffrée signée, valable un mois, avec un prix ferme et un périmètre décrit. Le gérant de Toitures Durand renvoie le document signé, en ajoutant à la main la mention « sous réserve d’une remise de 15 % ».</p>
      <p>Deux semaines plus tard, ISR Conseil apprend que son commercial avait affirmé oralement que le logiciel était « déjà conforme à la réforme à venir ». La mention ne figure ni dans l’offre ni dans le contrat. Le gérant, qui n’y connaît rien en informatique, n’a pas vérifié. Il demande aujourd’hui l’annulation et refuse de payer.</p>
      <p>Rédige ta réponse en quatre blocs : <strong>qualification</strong>, <strong>règle</strong>, <strong>application</strong>, <strong>conclusion</strong>. Traite deux points : la formation du contrat, puis la validité.</p>`,
      starter: `1. Qualification
Le document signé constitue ...`,
      model: `1. Qualification
Il s'agit d'un contrat de prestation de service numérique conclu entre deux
professionnels, une SAS et une SARL. Je dois examiner deux questions distinctes :
la formation du contrat (rencontre de l'offre et de l'acceptation) puis sa validité
(conditions de validité et vice du consentement).

2. Règle
Formation : le contrat se forme par la rencontre d'une offre ferme et précise et
d'une acceptation pure et simple. Une acceptation qui modifie les termes vaut
contre-proposition et relance la négociation.
Validité : le contrat suppose le consentement des parties, leur capacité, un contenu
licite et certain, et l'absence de vice du consentement. Le dol est une manœuvre ou
une dissimulation destinée à tromper ; il rend le consentement vicié et ouvre la
nullité relative.

3. Application
L'offre d'ISR Conseil est ferme et précise : prix, périmètre, durée de validité.
La signature du gérant accompagnée de la mention "sous réserve d'une remise de 15 %"
n'est pas une acceptation pure et simple : c'est une contre-proposition sur le prix.
Le contrat n'est donc pas formé à ce stade, sauf accord ultérieur d'ISR Conseil sur
la remise ; la facturation au prix initial est contestable.
Sur la validité, l'affirmation du commercial selon laquelle le logiciel serait
"déjà conforme à la réforme à venir" est une déclaration inexacte déterminante du
consentement du client, qui n'a pas les compétences techniques pour la vérifier.
Cette dissimulation caractérise un dol, donc un vice du consentement.

4. Conclusion
Le contrat n'a pas été valablement formé, faute d'acceptation pure et simple : la
facture est fragile. Si un accord est intervenu après la contre-proposition, il est
en revanche attaquable pour dol : le gérant peut demander la nullité relative et des
dommages et intérêts. Recommandation : formaliser par écrit la réponse à la
contre-proposition et faire figurer les caractéristiques techniques dans le contrat.`,
      checks: [
        { label: "Le contrat est qualifié (prestation de service numérique, contrat entre professionnels)", test: /contrat de prestation|prestation de service/i },
        { label: "La règle de formation est énoncée : offre ferme et précise, acceptation pure et simple", test: /acceptation pure et simple|offre ferme/i },
        { label: "La mention manuscrite est analysée comme une contre-proposition", test: /contre-proposition/i },
        { label: "Les conditions de validité du contrat sont citées", test: /consentement[\s\S]*capacit|capacit[\s\S]*consentement/i },
        { label: "Le vice retenu est nommé (dol)", test: /dol/i },
        { label: "La sanction est identifiée : nullité relative", test: /nullité relative/i },
        { label: "Une conclusion tranche la situation du client", test: /conclusion/i }
      ]
    },
    {
      id: "at-t1-externalites",
      title: "Chiffrer une externalité et proposer une internalisation",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Une plateforme de livraison installe un entrepôt logistique en périphérie d’Amiens. Données de l’annexe :</p>
      <ul>
        <li>Chiffre d’affaires annuel : 4 200 000 €</li>
        <li>Charges internes (salaires, loyer, énergie, maintenance) : 3 650 000 €</li>
        <li>Nuisances supportées par la collectivité : bruit et dégradation des voiries estimées à 180 000 € par an, non refacturées.</li>
      </ul>
      <p>Calcule le <strong>résultat</strong> de l’entreprise puis le <strong>coût social</strong> de son activité. Qualifie l’externalité, indique si la production est excessive ou insuffisante, et propose <strong>deux</strong> instruments d’internalisation avec leur effet attendu.</p>`,
      starter: `1. Résultat de l'entreprise
4 200 000 - 3 650 000 = ...`,
      model: `1. Résultat de l'entreprise
4 200 000 - 3 650 000 = 550 000 euros de résultat annuel.
Le calcul ne retient que les charges internes : les nuisances ne sont pas dans
les comptes, elles ne sont donc pas une charge pour l'entreprise.

2. Coût social
Coût social = charges internes + coût externe = 3 650 000 + 180 000 = 3 830 000 euros.
Autrement dit, l'activité crée 550 000 euros de profit privé mais coûte 180 000 euros
par an à la collectivité, soit 32,7 % du résultat (180 000 / 550 000).

3. Qualification
Il s'agit d'une externalité négative de production : un effet défavorable subi par un
tiers, ici la collectivité, sans compensation monétaire par le marché. Le prix payé
par les clients ne reflète pas le coût social, donc la quantité produite est
supérieure à l'optimum social : l'activité est excessive du point de vue collectif.

4. Internalisation, deux instruments
a) Taxe ou redevance assise sur les nuisances (par exemple une taxe sur les rotations
de camions). Effet : elle relève le coût marginal privé jusqu'au coût marginal social,
ce qui réduit la quantité d'activité ou pousse à investir dans l'isolation phonique.
b) Norme ou réglementation (horaires de livraison, seuil de bruit, obligation de
réfection des voiries). Effet : elle interdit les comportements les plus coûteux et
rend le coût certain, au prix d'une perte de flexibilité.
À mentionner en ouverture : subvention conditionnée à un investissement vert, ou
marché de droits, plus adaptés à une pollution diffuse.

5. Conclusion
L'entreprise est rentable mais son résultat ne dit rien de sa performance sociétale.
La collectivité subventionne de fait son modèle logistique à hauteur de 180 000 euros
par an : sans internalisation, la concurrence est faussée au détriment des acteurs
qui paient déjà leurs nuisances.`,
      checks: [
        { label: "Le résultat est calculé (550 000 €)", test: /550[\s\S]{0,6}000/ },
        { label: "Le coût social est calculé (3 830 000 €)", test: /3[\s\S]{0,3}830[\s\S]{0,6}000/ },
        { label: "L’externalité est qualifiée de négative", test: /externalité négative/i },
        { label: "La conséquence est énoncée : production excessive par rapport à l’optimum social", test: /excessive|supérieure à l'optimum|surproduction/i },
        { label: "Deux instruments d’internalisation sont proposés et argumentés", test: /taxe|redevance|norme|réglementation/i },
        { label: "L’effet attendu de l’instrument est décrit", test: /coût marginal|coût social|incite|réduit/i }
      ]
    },
    {
      id: "at-t1-parties-prenantes",
      title: "Cartographier les parties prenantes et les contre-pouvoirs",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Une PME de 40 salariés, spécialisée dans l’hébergement de sites, veut doubler la capacité de son datacenter. Le projet implique un emprunt de 900 000 €, un permis de construire, un recrutement de 6 techniciens et une hausse des tarifs de 8 % pour les clients existants. Des riverains ont lancé une pétition.</p>
      <p>Identifie <strong>cinq parties prenantes</strong> (en précisant primaire ou secondaire), l’<strong>attente</strong> de chacune, le <strong>risque</strong> qu’elle fait peser sur le projet, et un <strong>levier</strong> de gestion. Termine par la partie prenante la plus dangereuse à court terme, justifiée.</p>`,
      starter: `1. Riverains (secondaire) - attente : ...`,
      model: `1. Riverains et association locale (parties prenantes secondaires)
Attente : pas de nuisances, cadre de vie préservé.
Risque : recours contentieux contre le permis de construire, retard de 6 à 12 mois.
Levier : réunion publique, étude d'impact, isolation phonique, charte d'engagement.

2. Clients hébergés (parties prenantes primaires)
Attente : continuité de service et prix stables.
Risque : départ vers un concurrent, perte de chiffre d'affaires, mauvaise réputation.
Levier : lissage de la hausse tarifaire, palier de qualité de service, information en amont.

3. Salariés et représentants du personnel (parties prenantes primaires)
Attente : charge de travail maîtrisée, emploi stable, conditions de travail.
Risque : tension sociale, départs, baisse de productivité pendant le chantier.
Levier : consultation du CSE, plan de charge, formation des nouveaux techniciens.

4. Banque prêteuse (partie prenante primaire)
Attente : capacité de remboursement démontrée.
Risque : refus ou renchérissement du crédit, garanties exigées.
Levier : business plan, prévisionnel de trésorerie, garanties ou caution.

5. Collectivité et autorité compétente (partie prenante secondaire)
Attente : conformité urbanisme, développement économique local, respect des normes.
Risque : refus ou conditionnement du permis, allongement des délais.
Levier : dépôt anticipé, dialogue en amont, prise en compte des prescriptions.

La plus dangereuse à court terme : les riverains, parce qu'un recours suspend
l'exécution du permis et bloque tout le calendrier, alors que la banque et les
clients restent gérables par la négociation. Un contre-pouvoir sans lien contractuel
peut donc peser plus qu'un partenaire économique.`,
      checks: [
        { label: "Cinq parties prenantes sont identifiées", test: /5\./ },
        { label: "La distinction primaire / secondaire est utilisée", test: /primaire|secondaire/i },
        { label: "L’attente de chaque partie est formulée", test: /attente/i },
        { label: "Le risque pesant sur le projet est formulé", test: /risque/i },
        { label: "Un levier de gestion est proposé", test: /levier/i },
        { label: "Une partie prenante est désignée comme la plus critique, avec justification", test: /plus dangereuse|plus critique|le plus critique/i }
      ]
    }
  ]
},

/* ============================== 02 ============================== */
{
  id: "02-regulation",
  num: "02",
  title: "La régulation de l’activité économique",
  tag: "Thème 2 du programme",
  hot: true,
  intro: "Le thème où l’on confond le plus de choses : politique conjoncturelle contre structurelle, autorité administrative indépendante contre administration, entente contre abus de position dominante. Trois distinctions à sécuriser.",
  cours: `
  <h2>1. Les trois rôles de l’État</h2>
  <table class="tbl">
    <caption>Trois fonctions, trois justifications</caption>
    <thead><tr><th>Fonction</th><th>Contenu</th><th>Justification</th></tr></thead>
    <tbody>
      <tr><td><strong>Allocation</strong></td><td>Produire des biens et services que le marché ne fournit pas ou fournit mal : défense, justice, éclairage public, santé, école</td><td>Biens collectifs, externalités, monopoles naturels</td></tr>
      <tr><td><strong>Redistribution</strong></td><td>Prélèvements et transferts : impôts, cotisations, prestations, minima sociaux</td><td>Corriger les inégalités, assurer une couverture sociale</td></tr>
      <tr><td><strong>Régulation</strong></td><td>Produire les règles, les faire appliquer, stabiliser l’activité, garantir la concurrence</td><td>Défaillances de marché, stabilité économique et juridique</td></tr>
    </tbody>
  </table>
  <p>Redistribution <strong>verticale</strong> : des hauts revenus vers les bas revenus (impôt progressif, minima sociaux). Redistribution <strong>horizontale</strong> : entre catégories dans une même tranche (familles, maladie, vieillesse).</p>
  <p>Un <strong>bien collectif</strong> n’est ni rival ni excluable : ma consommation n’en prive personne, et on ne peut pas m’en écarter. C’est pourquoi le marché ne le finance pas spontanément.</p>

  <h2>2. Croissance et déséquilibres</h2>
  <p><strong>Croissance</strong> : hausse durable et mesurable de la production de richesses, mesurée par le PIB en volume (donc corrigé de l’inflation). Elle est <strong>extensive</strong> si elle vient de l’augmentation des quantités de facteurs, <strong>intensive</strong> si elle vient des gains de productivité.</p>
  <p><strong>Inflation</strong> : hausse générale et durable des prix, mesurée par l’indice des prix à la consommation. Trois causes à citer : <strong>par la demande</strong> (excès de demande), <strong>par les coûts</strong> (matières premières, salaires, énergie), <strong>par les anticipations</strong> (spirale prix-salaires). En dessous de zéro, la <strong>déflation</strong> est plus dangereuse : les ménages reportent leurs achats, les entreprises réduisent leur production, le chômage monte.</p>
  <p><strong>Chômage</strong> : quatre catégories à ne pas mélanger.</p>
  <table class="tbl">
    <caption>Types de chômage</caption>
    <thead><tr><th>Type</th><th>Cause</th><th>Réponse</th></tr></thead>
    <tbody>
      <tr><td><strong>Conjoncturel</strong></td><td>Insuffisance de la demande liée à une récession</td><td>Politique de relance</td></tr>
      <tr><td><strong>Structurel</strong></td><td>Inadéquation des qualifications, mutations technologiques, coût du travail</td><td>Formation, GPEC, politiques de l’offre</td></tr>
      <tr><td><strong>Frictionnel</strong></td><td>Temps de recherche entre deux emplois</td><td>Amélioration du service public de l’emploi</td></tr>
      <tr><td><strong>Technologique</strong></td><td>Automatisation et numérisation supprimant des tâches</td><td>Reconversion, adaptation des compétences</td></tr>
    </tbody>
  </table>

  <h2>3. Politiques conjoncturelles et politiques structurelles</h2>
  <table class="tbl">
    <caption>La distinction à ne jamais rater</caption>
    <thead><tr><th></th><th>Conjoncturelle</th><th>Structurelle</th></tr></thead>
    <tbody>
      <tr><td><strong>Horizon</strong></td><td>Court terme, l’année</td><td>Long terme, plusieurs années</td></tr>
      <tr><td><strong>Objectif</strong></td><td>Agir sur le niveau de l’activité, lisser les cycles</td><td>Modifier les conditions de l’offre, les capacités de production</td></tr>
      <tr><td><strong>Instruments</strong></td><td><strong>Budgétaire</strong> (dépenses, prélèvements) et <strong>monétaire</strong> (taux directeurs, masse monétaire)</td><td>Fiscalité, marché du travail, formation, concurrence, innovation, infrastructures, normes</td></tr>
      <tr><td><strong>Exemple</strong></td><td>Baisse des taux, plan de relance, chèque énergie temporaire</td><td>Réforme du marché du travail, crédit d’impôt recherche, loi sur la concurrence</td></tr>
    </tbody>
  </table>
  <p>Le vocabulaire est un indicateur : <strong>relance</strong>, <strong>rigueur</strong>, <strong>stabilisation</strong>, <strong>taux directeur</strong> = conjoncturel. <strong>Réforme</strong>, <strong>compétitivité</strong>, <strong>qualification</strong>, <strong>cadre juridique</strong> = structurel.</p>
  <p><strong>Limites de l’intervention de l’État</strong>, à citer par leur nom : délais de mise en œuvre et d’efficacité, effets d’éviction (l’État emprunte la place des entreprises), contrainte extérieure et internationalisation de l’économie, risque de trappe à liquidité quand la monnaie ne circule plus, défaut d’information, et règles supranationales qui encadrent les marges de manœuvre nationales.</p>
  <p><strong>Régulation supranationale</strong> : dans le cadre européen, la politique monétaire est confiée à la BCE, le pacte de stabilité encadre les déficits et la dette, les traités interdisent les aides d’État discriminatoires, et les directives viennent harmoniser les règles du marché intérieur. Une entreprise subit ces règles sans avoir de prise dessus : c’est une composante du macro-environnement.</p>

  <h2>4. Les autorités administratives indépendantes</h2>
  <p>Une <strong>AAI</strong> est un organisme public doté de la personnalité morale, <strong>indépendant du pouvoir exécutif</strong>, chargé de réguler un secteur ou de protéger un droit. Elle cumule trois pouvoirs : réglementaire, de contrôle, et de <strong>sanction</strong> (amendes, injonctions, transactions). Exemples : Autorité de la concurrence, CNIL, ARCEP, ARCOM, ACPR.</p>
  <div class="callout callout--warn">
    <span class="callout__label">Ne pas confondre</span>
    <p>La <strong>DGCCRF</strong> est une administration de contrôle rattachée au ministère de l’Économie, pas une AAI. L’<strong>Autorité de la concurrence</strong> est une AAI. La <strong>CNIL</strong> est une AAI. Un « régulateur » n’est pas forcément une AAI.</p>
  </div>

  <h2>5. Le droit de la concurrence</h2>
  <ul>
    <li><strong>Entente</strong> (pratique anticoncurrentielle) : accord ou action concertée entre entreprises indépendantes pour fausser le jeu de la concurrence. Exemples : répartition de marchés, fixation commune des prix, échange d’informations sensibles.</li>
    <li><strong>Abus de position dominante</strong> : une entreprise dominante exploite sa position pour empêcher la concurrence. Exemples : prix prédateurs, refus de vente, couplage, verrouillage technique.</li>
    <li><strong>Contrôle des concentrations</strong> : autorisation préalable au-delà de seuils, pour éviter la création ou le renforcement d’une position dominante.</li>
    <li><strong>Pratiques restrictives</strong> : déséquilibre significatif, rupture brutale d’une relation commerciale établie, retards de paiement.</li>
  </ul>
  <p>Sanctions : amendes pouvant atteindre un pourcentage du chiffre d’affaires mondial, injonctions, engagements, dommages et intérêts devant le juge civil. <strong>Pour une entreprise, l’enjeu est double :</strong> se protéger des pratiques des autres (plaignant) et ne pas être sanctionnée (prévention, programme de conformité).</p>

  <h2>6. Propriété industrielle : brevet et marque</h2>
  <table class="tbl">
    <caption>Deux titres, deux logiques</caption>
    <thead><tr><th></th><th>Brevet</th><th>Marque</th></tr></thead>
    <tbody>
      <tr><td>Protège</td><td>Une invention : produit, procédé, dispositif technique</td><td>Un signe distinctif : nom, logo, slogan, forme, son</td></tr>
      <tr><td>Conditions</td><td>Nouveauté, activité inventive, application industrielle</td><td>Distinctivité, disponibilité, licéité</td></tr>
      <tr><td>Durée</td><td>20 ans à compter du dépôt, non renouvelable</td><td>10 ans, renouvelable indéfiniment</td></tr>
      <tr><td>Effet</td><td>Monopole d’exploitation, interdiction de fabriquer ou vendre sans autorisation</td><td>Interdiction d’usage d’un signe identique ou similaire pour des produits proches</td></tr>
    </tbody>
  </table>
  <p>Intérêt stratégique : le brevet se publie, il révèle l’invention mais protège vingt ans ; le <strong>secret</strong> protège indéfiniment mais tombe si l’information fuit. La marque construit la confiance et réduit l’asymétrie d’information. Les deux se valorisent : licences, redevances, apport en nature, garantie bancaire.</p>

  <h2>7. Analyser le macro-environnement</h2>
  <table class="tbl">
    <caption>PESTEL, avec exemples informatiques</caption>
    <thead><tr><th>Lettre</th><th>Contenu</th><th>Exemple pour une ESN</th></tr></thead>
    <tbody>
      <tr><td><strong>P</strong>olitique</td><td>Stabilité, politique économique, marchés publics</td><td>Plan de sobriété numérique, marchés publics de l’État</td></tr>
      <tr><td><strong>E</strong>conomique</td><td>Croissance, inflation, taux, pouvoir d’achat</td><td>Hausse des taux : les clients reportent les projets</td></tr>
      <tr><td><strong>S</strong>ocioculturel</td><td>Démographie, modes de vie, attentes</td><td>Attente de télétravail et de services mobiles</td></tr>
      <tr><td><strong>T</strong>echnologique</td><td>Innovation, obsolescence, standards</td><td>Cloud, IA générative, fin de support d’un framework</td></tr>
      <tr><td><strong>E</strong>nvironnemental</td><td>Climat, énergie, réglementation verte</td><td>Consommation énergétique des datacenters</td></tr>
      <tr><td><strong>L</strong>égal</td><td>Lois, normes, jurisprudence</td><td>RGPD, NIS 2, obligations de conformité</td></tr>
    </tbody>
  </table>
  <p>Un PESTEL n’est pas une liste de six cases remplies au hasard : chaque élément retenu doit être <strong>daté, chiffré si possible, et suivi d’une conséquence</strong> pour l’entreprise. Sinon c’est du remplissage, et le correcteur le voit.</p>
  `,
  cards: [
    { id: "t2a", q: "Quelles sont les trois fonctions de l’État ?", a: "<strong>Allocation</strong> (produire les biens collectifs que le marché ne fournit pas), <strong>redistribution</strong> (prélèvements et transferts pour corriger les inégalités), <strong>régulation</strong> (édicter et faire appliquer les règles, stabiliser l’activité)." },
    { id: "t2b", q: "Redistribution verticale et horizontale", a: "<strong>Verticale</strong> : des hauts revenus vers les bas revenus (impôt progressif). <strong>Horizontale</strong> : entre catégories de même niveau (maladie, famille, vieillesse)." },
    { id: "t2c", q: "Qu’est-ce qu’un bien collectif ?", a: "Un bien <strong>non rival</strong> (ma consommation ne réduit pas celle des autres) et <strong>non excluable</strong> (on ne peut pas m’en écarter). Le marché ne le finance pas spontanément : d’où l’intervention publique." },
    { id: "t2d", q: "Trois causes d’inflation", a: "Par la <strong>demande</strong> (excès de demande), par les <strong>coûts</strong> (énergie, matières premières, salaires), par les <strong>anticipations</strong> (spirale prix-salaires). Effet : perte de pouvoir d’achat et baisse de compétitivité à l’export." },
    { id: "t2e", q: "Pourquoi la déflation est-elle plus grave que l’inflation ?", a: "Les ménages reportent leurs achats en attendant des prix plus bas, la demande s’effondre, les entreprises réduisent leur production et licencient. La baisse des prix alimente la baisse de l’activité : c’est un cercle vicieux." },
    { id: "t2f", q: "Quatre types de chômage", a: "<strong>Conjoncturel</strong> (insuffisance de la demande), <strong>structurel</strong> (inadéquation des qualifications, mutations), <strong>frictionnel</strong> (temps de recherche), <strong>technologique</strong> (automatisation)." },
    { id: "t2g", q: "Politique conjoncturelle ou structurelle ?", a: "<strong>Conjoncturelle</strong> : court terme, action sur le niveau d’activité, instruments budgétaire et monétaire. <strong>Structurelle</strong> : long terme, action sur les conditions de l’offre (formation, fiscalité, concurrence, innovation)." },
    { id: "t2h", q: "Quels sont les instruments de la politique monétaire, et qui la mène en France ?", a: "Les <strong>taux directeurs</strong> et la liquidité bancaire. Elle est menée par la <strong>BCE</strong> pour la zone euro : la France n’a plus de politique monétaire nationale." },
    { id: "t2i", q: "Qu’est-ce qu’une autorité administrative indépendante ?", a: "Un organisme public <strong>indépendant du pouvoir exécutif</strong>, doté d’un pouvoir réglementaire, de contrôle et de <strong>sanction</strong>, chargé de réguler un secteur ou de protéger un droit. Exemples : Autorité de la concurrence, CNIL, ARCEP." },
    { id: "t2j", q: "Entente ou abus de position dominante ?", a: "<strong>Entente</strong> : accord entre entreprises indépendantes (fixer les prix, se répartir les marchés). <strong>Abus</strong> : une entreprise déjà dominante exploite sa position (prix prédateurs, refus de vente, couplage)." },
    { id: "t2k", q: "Brevet et marque : durée et objet", a: "<strong>Brevet</strong> : invention nouvelle, inventive et applicable industriellement, 20 ans non renouvelable. <strong>Marque</strong> : signe distinctif, 10 ans renouvelable indéfiniment." },
    { id: "t2l", q: "Les six lettres de PESTEL", a: "Politique, Économique, Socioculturel, Technologique, Environnemental, Légal. Chaque facteur retenu doit être daté et suivi d’une conséquence pour l’entreprise." },
    { id: "t2m", q: "Quelles sont les limites de l’intervention de l’État ?", a: "Délais d’efficacité, <strong>effets d’éviction</strong>, contrainte extérieure dans une économie ouverte, défaut d’information, règles supranationales (UE), et risque de dépendance des agents aux aides." }
  ],
  ateliers: [
    {
      id: "at-t2-pestel",
      title: "Construire un PESTEL utile, pas décoratif",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Une ESN amiénoise de 25 salariés réalise 60 % de son chiffre d’affaires avec des collectivités et des PME industrielles. Faits disponibles :</p>
      <ul>
        <li>la hausse des taux d’intérêt renchérit les projets d’investissement de ses clients ;</li>
        <li>le marché de la cybersécurité progresse, porté par la directive NIS 2 ;</li>
        <li>elle ne trouve pas de développeurs confirmés sur le bassin amiénois ;</li>
        <li>ses clients exigent désormais des engagements de sobriété énergétique dans les appels d’offres ;</li>
        <li>un de ses clients publics a été retardé par un contentieux de marché public.</li>
      </ul>
      <p>Classe ces cinq faits dans les bonnes lettres de PESTEL, puis formule pour chacun une <strong>conséquence concrète</strong> pour l’ESN. Termine par les <strong>deux facteurs les plus menaçants</strong> à douze mois, justifiés.</p>`,
      starter: `P (politique) : ...
E (économique) : hausse des taux ...`,
      model: `P - Politique : commande publique et calendrier des marchés. Conséquence : un
contentieux sur un marché public peut décaler 20 à 30 % du chiffre d'affaires
d'une année. Il faut diversifier vers le privé et sécuriser les candidatures.

E - Économique : hausse des taux d'intérêt. Conséquence : les clients industriels
reportent ou réduisent leurs projets informatiques. Il faut proposer des offres
modulaires et du paiement échelonné, et sécuriser un carnet de commandes plus long.

S - Socioculturel : attentes des salariés en matière de télétravail et d'équilibre
de vie. Conséquence : sans flexibilité, l'ESN perd ses rares profils confirmés.
Levier : accord de télétravail formalisé, 2 à 3 jours par semaine.

T - Technologique : montée de la cybersécurité et des exigences NIS 2.
Conséquence : nouveau marché à forte valeur, mais nécessite une certification et
des compétences rares. Levier : partenariat ou recrutement ciblé.

E - Environnemental : exigences de sobriété énergétique dans les appels d'offres.
Conséquence : une offre sans engagement environnemental est éliminée. Levier :
mesurer l'empreinte des hébergements, proposer des architectures sobres.

L - Légal : RGPD et NIS 2 imposent des obligations de conformité aux clients, donc
des prestations de mise en conformité. Conséquence : opportunité de mission
récurrente, mais responsabilité contractuelle accrue.

Les deux facteurs les plus menaçants à douze mois : la hausse des taux, qui gèle
directement les budgets, et la pénurie de développeurs confirmés, qui empêche de
répondre aux appels d'offres même quand ils existent. Le premier est conjoncturel,
le second est structurel : il ne se résoudra pas en attendant.`,
      checks: [
        { label: "Les cinq faits sont classés dans une lettre de PESTEL", test: /P - |E - |T - |S - |L - /i },
        { label: "La hausse des taux est rattachée à l’économique", test: /(E\s?-\s?Économique[\s\S]{0,60}taux|taux[\s\S]{0,140}(économique|E\s?-))/i },
        { label: "NIS 2 ou le RGPD est rattaché au légal ou au technologique", test: /NIS 2|RGPD/ },
        { label: "Chaque facteur est suivi d’une conséquence pour l’entreprise", test: /conséquence/i },
        { label: "Deux facteurs menaçants sont désignés et justifiés", test: /menaçant|menace/i }
      ]
    },
    {
      id: "at-t2-politiques",
      title: "Classer cinq mesures : conjoncturel ou structurel",
      lang: "text",
      prompt: `<p>Pour chaque mesure, indique s’il s’agit d’une politique <strong>conjoncturelle</strong> ou <strong>structurelle</strong>, précise l’instrument (budgétaire, monétaire, offre, réglementaire) et donne l’<strong>effet attendu</strong> sur l’entreprise.</p>
      <ol>
        <li>La BCE abaisse ses taux directeurs de 0,25 point.</li>
        <li>L’État crée un crédit d’impôt recherche majoré pour les PME.</li>
        <li>Le gouvernement verse une prime exceptionnelle de 100 € aux ménages modestes.</li>
        <li>Une loi réforme l’assurance chômage et raccourcit la durée d’indemnisation.</li>
        <li>Un plan de 500 millions d’euros finance la formation aux métiers de la cybersécurité.</li>
      </ol>`,
      starter: `1. conjoncturelle, monétaire : ...`,
      model: `1. Conjoncturelle, instrument monétaire. Effet attendu : le coût du crédit baisse,
   ce qui relance l'investissement des clients et allège la charge financière de
   l'entreprise si elle est endettée.

2. Structurelle, instrument budgétaire orienté offre. Effet attendu : le coût de
   l'innovation diminue, donc l'entreprise peut financer un projet de R et D qu'elle
   reportait. Effet différé de plusieurs exercices.

3. Conjoncturelle, instrument budgétaire de relance par la demande. Effet attendu :
   soutien à la consommation à court terme, effet limité si les ménages épargnent.
   Peu d'impact direct sur une ESN, sauf si ses clients vendent aux ménages.

4. Structurelle, instrument réglementaire sur le marché du travail. Effet attendu :
   incitation à l'embauche en CDI, mais pression sur les salaires et risque de
   précarisation. Effet à moyen terme.

5. Structurelle, politique de l'offre par la formation. Effet attendu : réduction de
   la pénurie de compétences, donc desserrement du principal frein de recrutement.
   Effet à trois ou cinq ans.

Contrôle : le mot "conjoncturel" ne va jamais avec "réforme" ni avec "formation",
et le mot "structurel" ne va jamais avec "relance" ni avec "taux directeur".`,
      checks: [
        { label: "Les cinq mesures sont classées", test: /5\./ },
        { label: "La mesure 1 est identifiée comme monétaire et conjoncturelle", test: /monétaire/i },
        { label: "La mesure 4 est identifiée comme structurelle et réglementaire", test: /réglementaire/i },
        { label: "Un effet attendu est formulé pour chaque mesure", test: /effet attendu/i },
        { label: "La distinction court terme / moyen terme est explicitée", test: /court terme|moyen terme|long terme/i }
      ]
    },
    {
      id: "at-t2-concurrence",
      title: "Qualifier trois pratiques anticoncurrentielles",
      lang: "text",
      prompt: `<p><strong>Trois situations.</strong></p>
      <ol>
        <li>Deux éditeurs de logiciels de paie, représentant 70 % du marché français, se réunissent et décident de ne pas démarcher mutuellement leurs clients, tout en échangeant leurs grilles tarifaires.</li>
        <li>Un éditeur détenant 85 % du marché des logiciels de caisse impose à ses revendeurs de ne pas commercialiser la solution d’un concurrent, sous peine de perdre leur agrément, et casse les prix sur le segment où ce concurrent tente de s’implanter.</li>
        <li>Une société d’infogérance met fin sans préavis à une relation de sept ans avec un client, alors que celui-ci a refusé une hausse de tarif de 30 %.</li>
      </ol>
      <p>Pour chaque situation : <strong>qualifie</strong> la pratique, indique l’<strong>autorité</strong> compétente, la <strong>sanction</strong> encourue, et la <strong>démarche</strong> que l’entreprise victime ou l’auteur doit engager. Cite le fondement (entente, abus de position dominante, pratique restrictive).</p>`,
      starter: `Situation 1 : qualification ...`,
      model: `Situation 1 : entente anticoncurrentielle.
Qualification : accord entre entreprises indépendantes ayant pour objet de fausser
le jeu de la concurrence. La répartition de clients et l'échange d'informations
tarifaires sont deux pratiques expressément visées.
Autorité : Autorité de la concurrence en droit interne, Commission européenne si
le marché est affecté au-delà de la France. Sanction : amende pouvant atteindre un
pourcentage du chiffre d'affaires mondial, injonction de cesser, publication de la
décision. Démarche : programme de conformité, et pour la victime, saisine de
l'Autorité ou action en dommages et intérêts devant le juge civil.

Situation 2 : abus de position dominante.
Qualification : une entreprise dominante exploite sa position pour évincer un
concurrent, par une restriction de distribution (agrément conditionné à l'exclusivité)
et des prix prédateurs. L'exclusivité imposée aux revendeurs et la vente à perte
ciblée sont les deux indices.
Autorité : Autorité de la concurrence. Sanction : amende, injonction, engagements
acceptés, éventuellement mesures provisoires. Démarche : le concurrent saisit
l'Autorité et documente les prix et les refus d'agrément.

Situation 3 : pratique restrictive de concurrence.
Qualification : rupture brutale d'une relation commerciale établie et déséquilibre
significatif entre les parties. Le préavis doit être proportionné à l'ancienneté de
la relation, sept ans en l'espèce.
Autorité : juge commercial, la DGCCRF pouvant enquêter. Sanction : dommages et
intérêts, nullité de la clause abusive, amende administrative. Démarche : mise en
demeure, puis assignation sur le fondement du déséquilibre significatif.

Point de méthode : qualifier avant de conclure. Une entente suppose plusieurs
entreprises indépendantes, l'abus suppose une position dominante préalable établie.`,
      checks: [
        { label: "Situation 1 qualifiée d’entente", test: /entente/i },
        { label: "Situation 2 qualifiée d’abus de position dominante", test: /abus de position dominante/i },
        { label: "Situation 3 qualifiée de pratique restrictive (rupture brutale)", test: /rupture brutale|pratique restrictive/i },
        { label: "L’Autorité de la concurrence est citée comme autorité compétente", test: /Autorité de la concurrence/ },
        { label: "Les sanctions sont indiquées (amende, dommages et intérêts)", test: /amende/i },
        { label: "Une démarche est proposée pour l’entreprise", test: /saisine|saisit|assignation|mise en demeure|dommages et intérêts/i }
      ]
    }
  ]
},

/* ============================== 03 ============================== */
{
  id: "03-organisation",
  num: "03",
  title: "L’organisation de l’activité de l’entreprise",
  tag: "Thème 3 du programme",
  hot: true,
  intro: "Le thème le plus calculatoire : productivité, coûts, seuil de rentabilité, besoin en fonds de roulement. Les calculs sont simples, ce sont les unités et l’interprétation qui rapportent les points.",
  cours: `
  <h2>1. Les facteurs de production et la productivité</h2>
  <p>Quatre facteurs : le <strong>travail</strong> (quantité et qualité de main-d’œuvre), le <strong>capital</strong> (fixe : machines, locaux, licences ; circulant : matières, consommables), les <strong>matières premières</strong>, et les <strong>connaissances</strong> (savoir-faire, brevets, données, organisation).</p>
  <p>La <strong>combinaison productive</strong> est la façon dont l’entreprise associe ces facteurs. Elle peut être plus capitalistique, en substituant du capital au travail, ou plus intensive en travail.</p>
  <p><strong>Productivité</strong> = production réalisée divisée par la quantité de facteur utilisée.</p>
  <pre class="codeblock"><code class="lang-text">Productivité du travail (par tête) = production / nombre de salariés
Productivité horaire            = production / nombre d'heures travaillées
Taux de variation               = (valeur finale - valeur initiale) / valeur initiale x 100

Gain de productivité : la production augmente plus vite que les facteurs
employés. Le coût unitaire baisse si les charges fixes sont absorbées
par un volume plus élevé.</code></pre>
  <div class="callout callout--warn">
    <span class="callout__label">Deux pièges de calcul</span>
    <p>Une productivité est toujours un <strong>rapport</strong> : une production divisée par un facteur, jamais une production seule. Et une hausse de production n’est pas une hausse de productivité : si les effectifs augmentent plus vite, la productivité <strong>baisse</strong>.</p>
  </div>

  <h2>2. Structure de coûts et seuil de rentabilité</h2>
  <table class="tbl">
    <caption>Le vocabulaire à ne pas mélanger</caption>
    <thead><tr><th>Notion</th><th>Définition</th></tr></thead>
    <tbody>
      <tr><td><strong>Charges fixes</strong></td><td>Indépendantes du volume (loyer, assurances, salaires permanents)</td></tr>
      <tr><td><strong>Charges variables</strong></td><td>Proportionnelles au volume (matières, sous-traitance, commissions)</td></tr>
      <tr><td><strong>Coût total</strong></td><td>Charges fixes plus charges variables</td></tr>
      <tr><td><strong>Coût moyen</strong></td><td>Coût total divisé par la quantité produite</td></tr>
      <tr><td><strong>Coût marginal</strong></td><td>Coût de la dernière unité produite</td></tr>
      <tr><td><strong>Marge sur coût variable</strong></td><td>Prix de vente moins coût variable unitaire</td></tr>
      <tr><td><strong>Taux de marge sur coût variable</strong></td><td>Marge sur coût variable divisée par le chiffre d’affaires</td></tr>
    </tbody>
  </table>
  <pre class="codeblock"><code class="lang-text">Marge sur coût variable unitaire = prix de vente HT - coût variable unitaire
Taux de MCV                      = MCV / chiffre d'affaires x 100
Seuil de rentabilité (volume)    = charges fixes / MCV unitaire
Seuil de rentabilité (valeur)    = charges fixes / taux de MCV
Point mort (en mois)             = (seuil en valeur / CA annuel) x 12
Résultat                         = MCV totale - charges fixes</code></pre>
  <p><strong>Économies d’échelle</strong> : le coût unitaire baisse quand le volume augmente, parce que les charges fixes se répartissent. Au-delà d’un certain seuil apparaissent des <strong>déséconomies</strong> : saturation, complexité, erreurs, coûts de coordination.</p>

  <h2>3. La chaîne de valeur</h2>
  <p>Les <strong>activités principales</strong> : logistique interne, production, logistique externe, commercialisation et vente, services. Les <strong>activités de soutien</strong> : infrastructures de l’entreprise, gestion des ressources humaines, développement technologique, achats.</p>
  <p>Analyser la chaîne de valeur sert à répondre à une seule question : <strong>sur quel maillon l’entreprise crée-t-elle réellement de la valeur, et sur lequel ne crée-t-elle que du coût ?</strong> C’est le fondement économique du choix entre faire et faire faire.</p>

  <h2>4. Faire ou faire-faire</h2>
  <table class="tbl">
    <caption>L’arbitrage d’impartition</caption>
    <thead><tr><th>Faire (intégration)</th><th>Faire faire (impartition)</th></tr></thead>
    <tbody>
      <tr><td>Maîtrise du savoir-faire et de la qualité</td><td>Coûts variables, flexibilité, accès à une expertise rare</td></tr>
      <tr><td>Confidentialité préservée</td><td>Recentrage sur le cœur de métier</td></tr>
      <tr><td>Charges fixes et risque industriel assumés</td><td>Dépendance au prestataire, perte de compétence interne</td></tr>
      <tr><td>Délais maîtrisés</td><td>Coûts de transaction, de coordination et de contrôle</td></tr>
    </tbody>
  </table>
  <p>L’<strong>externalisation</strong> transfère une activité entière et son contrôle à un prestataire durable. La <strong>sous-traitance</strong> porte sur une production ponctuelle, réalisée selon les spécifications du donneur d’ordre. Les deux ne se confondent pas. À citer aussi : l’<strong>infogérance</strong>, externalisation de tout ou partie du système d’information.</p>

  <h2>5. Choisir une structure juridique</h2>
  <table class="tbl">
    <caption>Les quatre formes du programme, comparées sur les critères de décision</caption>
    <thead><tr><th></th><th>EI</th><th>EURL / SARL</th><th>SA</th><th>SAS</th></tr></thead>
    <tbody>
      <tr><td>Associés</td><td>1, l’exploitant</td><td>1 à 100</td><td>2 minimum</td><td>1 minimum</td></tr>
      <tr><td>Capital</td><td>Aucun minimum</td><td>Libre</td><td>37 000 € minimum</td><td>Libre</td></tr>
      <tr><td>Responsabilité</td><td><strong>Illimitée</strong> sur le patrimoine personnel</td><td>Limitée aux apports</td><td>Limitée aux apports</td><td>Limitée aux apports</td></tr>
      <tr><td>Direction</td><td>L’entrepreneur</td><td>Gérant, associé ou non</td><td>Conseil d’administration ou directoire</td><td>Président, personne physique ou morale</td></tr>
      <tr><td>Points forts</td><td>Simplicité, coût, décision rapide</td><td>Cadre connu, responsabilité limitée, souple</td><td>Crédibilité, ouverture du capital, gouvernance</td><td>Liberté statutaire maximale, adaptée aux levées de fonds</td></tr>
      <tr><td>Points faibles</td><td>Risque personnel total</td><td>Formalisme des décisions, agrément des cessions</td><td>Lourdeur, coût, commissaire aux comptes</td><td>Moins de jurisprudence, rédaction statutaire exigeante</td></tr>
    </tbody>
  </table>
  <p><strong>Critères de choix</strong> à mobiliser : nombre d’associés et projet de transmission, montant du capital et besoin de financement, <strong>niveau de risque de l’activité</strong> donc responsabilité, fiscalité et protection sociale du dirigeant, crédibilité vis-à-vis des banques et des grands clients, souplesse de gouvernance attendue.</p>
  <p>L’<strong>économie sociale et solidaire</strong> (coopératives, mutuelles) repose sur un principe différent : une personne, une voix, et la double qualité d’usager et d’associé.</p>

  <h2>6. Les risques et la responsabilité</h2>
  <ul>
    <li><strong>Économique</strong> : chute de la demande, hausse des coûts, dépendance à un client.</li>
    <li><strong>Financier</strong> : taux variable, change, défaut d’un client, tension de trésorerie.</li>
    <li><strong>Juridique</strong> : inexécution d’un contrat, contentieux, non-conformité réglementaire.</li>
    <li><strong>Technique et numérique</strong> : panne, perte de données, cyberattaque, obsolescence.</li>
    <li><strong>Humain</strong> : compétence rare, turn-over, accident du travail.</li>
  </ul>
  <p>Une cartographie croise <strong>probabilité</strong> et <strong>gravité</strong>. On prévient (formation, contrôle, sauvegarde, clause contractuelle) ou on protège (assurance, plan de continuité, redondance).</p>
  <table class="tbl">
    <caption>Trois régimes de responsabilité</caption>
    <thead><tr><th>Régime</th><th>Fondement</th><th>Conditions</th></tr></thead>
    <tbody>
      <tr><td><strong>Contractuelle</strong></td><td>Inexécution d’une obligation née du contrat</td><td>Faute contractuelle, dommage, lien de causalité ; réparation du dommage prévisible</td></tr>
      <tr><td><strong>Extracontractuelle</strong></td><td>Dommage causé à un tiers hors contrat</td><td>Faute, dommage, lien de causalité ; réparation intégrale</td></tr>
      <tr><td><strong>Pénale</strong></td><td>Infraction : escroquerie, abus de confiance, atteinte à un système de données</td><td>Élément légal, matériel et intentionnel ; peut viser la personne morale</td></tr>
    </tbody>
  </table>

  <h2>7. Organiser les ressources</h2>
  <p><strong>Ressources tangibles</strong> : locaux, matériel, trésorerie, stocks. <strong>Intangibles</strong> : marque, brevet, logiciel, base de données, réputation, culture d’entreprise. Les <strong>compétences</strong> combinent savoirs, savoir-faire et savoir-être, et ne valent que mobilisées collectivement.</p>
  <table class="tbl">
    <caption>Structures et limites</caption>
    <thead><tr><th>Structure</th><th>Principe</th><th>Limite</th></tr></thead>
    <tbody>
      <tr><td>Fonctionnelle</td><td>Regroupement par métier : production, commercial, technique</td><td>Cloisonnement, lenteur des arbitrages transverses</td></tr>
      <tr><td>Divisionnelle</td><td>Regroupement par produit, marché ou zone</td><td>Duplication de moyens, concurrence interne</td></tr>
      <tr><td>Matricielle</td><td>Double rattachement métier et projet</td><td>Conflits de priorité, charge de coordination</td></tr>
    </tbody>
  </table>
  <p>Coordination par <strong>ajustement mutuel</strong> (échange informel), <strong>supervision directe</strong> (un chef décide), ou <strong>standardisation</strong> des procédés, des résultats ou des qualifications. Trois <strong>niveaux de décision</strong> : stratégique (long terme), tactique (moyen terme), opérationnel (quotidien).</p>

  <h2>8. Financer l’activité</h2>
  <ul>
    <li><strong>Cycle d’exploitation</strong> : achats, stockage, production, vente, encaissement. Son décalage crée le <strong>besoin en fonds de roulement</strong> : stocks plus créances clients moins dettes fournisseurs.</li>
    <li><strong>Cycle d’investissement</strong> : acquisition durable, amortie sur plusieurs exercices, financée par des ressources stables.</li>
    <li><strong>Équilibre financier</strong> : les ressources stables doivent couvrir les emplois stables et le besoin en fonds de roulement. Sinon, le cycle court est financé par du découvert.</li>
  </ul>
  <p><strong>Modes de financement</strong> : autofinancement, emprunt bancaire, augmentation de capital, apports d’associés, crédit-bail, subventions, financement participatif. Chacun a un coût, un délai et un effet sur l’indépendance de décision.</p>
  <div class="callout callout--key">
    <span class="callout__label">Lecture express du compte de résultat</span>
    <p>Produits moins charges égale <strong>résultat</strong>. Le compte de résultat mesure la performance sur un exercice, le <strong>bilan</strong> photographie le patrimoine à une date. Ne jamais présenter le chiffre d’affaires comme un bénéfice.</p>
  </div>
  `,
  cards: [
    { id: "t3a", q: "Quels sont les quatre facteurs de production du programme ?", a: "Le <strong>travail</strong>, le <strong>capital</strong>, les <strong>matières premières</strong> et les <strong>connaissances</strong> (savoir-faire, brevets, organisation, données)." },
    { id: "t3b", q: "Comment calcule-t-on la productivité horaire du travail ?", a: "Production divisée par le nombre d’heures travaillées. Le résultat porte toujours une unité : dossiers par heure, euros par heure. Une production seule n’est pas une productivité." },
    { id: "t3c", q: "La production augmente de 30 % et les effectifs de 40 %. Que fait la productivité ?", a: "Elle <strong>baisse</strong>. La production croît moins vite que le facteur travail employé : la croissance est extensive, sans gain de productivité." },
    { id: "t3d", q: "Comment calcule-t-on le seuil de rentabilité en volume ?", a: "Charges fixes divisées par la marge sur coût variable unitaire. En valeur : charges fixes divisées par le taux de marge sur coût variable." },
    { id: "t3e", q: "Qu’est-ce que le point mort ?", a: "La date à laquelle le seuil de rentabilité est atteint dans l’année : seuil en valeur divisé par le chiffre d’affaires annuel, multiplié par 12. Il indique combien de mois l’entreprise travaille à perte." },
    { id: "t3f", q: "Différence entre charge fixe et charge variable", a: "<strong>Fixe</strong> : indépendante du volume (loyer, assurance, abonnement). <strong>Variable</strong> : proportionnelle au volume (matières, sous-traitance, commissions). Cette distinction fonde le calcul du seuil de rentabilité." },
    { id: "t3g", q: "Quelles sont les activités principales de la chaîne de valeur ?", a: "Logistique interne, production, logistique externe, commercialisation et vente, services. Les activités de soutien sont les infrastructures, les ressources humaines, le développement technologique et les achats." },
    { id: "t3h", q: "Externalisation et sous-traitance : quelle différence ?", a: "L’<strong>externalisation</strong> transfère une activité entière et son contrôle à un prestataire durable. La <strong>sous-traitance</strong> porte sur une production ponctuelle, réalisée selon les spécifications du donneur d’ordre." },
    { id: "t3i", q: "Trois risques de l’impartition", a: "Dépendance au prestataire, perte de savoir-faire et de compétence interne, coûts de transaction et de contrôle, auxquels s’ajoute le risque de confidentialité des données." },
    { id: "t3j", q: "EI ou SARL : quel critère est décisif ?", a: "La <strong>responsabilité</strong>. En EI, le patrimoine personnel est engagé indéfiniment ; en SARL, la responsabilité est limitée aux apports. C’est le premier critère dès que l’activité présente un risque." },
    { id: "t3k", q: "Capital minimum d’une SA, et d’une SAS ?", a: "SA : <strong>37 000 €</strong>. SAS : <strong>aucun minimum</strong>, le capital est fixé librement dans les statuts, qui bénéficient en plus d’une grande liberté de rédaction." },
    { id: "t3l", q: "Responsabilité civile contractuelle ou extracontractuelle ?", a: "<strong>Contractuelle</strong> : inexécution d’une obligation née du contrat, dommage prévisible réparé. <strong>Extracontractuelle</strong> : dommage causé à un tiers hors contrat, réparation intégrale sur faute, dommage et lien de causalité." },
    { id: "t3m", q: "Qu’est-ce que le besoin en fonds de roulement ?", a: "Stocks plus créances clients moins dettes fournisseurs. C’est le décalage entre encaissements et décaissements du cycle d’exploitation, à financer par des ressources stables ou du découvert." }
  ],
  ateliers: [
    {
      id: "at-t3-productivite",
      title: "Calculer et interpréter un gain de productivité",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Un service de support informatique traite des tickets.</p>
      <ul>
        <li>Année N : 12 techniciens, 1 600 heures travaillées par technicien et par an, <strong>18 000 tickets</strong> traités.</li>
        <li>Année N+1 : 14 techniciens, mêmes 1 600 heures, <strong>24 000 tickets</strong> traités.</li>
        <li>Coût complet d’un technicien : 38 000 € par an, charges comprises.</li>
      </ul>
      <p>Calcule la <strong>productivité horaire</strong> de chaque année, son <strong>taux de variation</strong>, le <strong>coût par ticket</strong> de chaque année, puis explique en trois lignes ce que cela signifie pour la décision d’embauche.</p>`,
      starter: `1. Productivité horaire année N
18 000 / (12 x 1 600) = ...`,
      model: `1. Productivité horaire année N
Heures travaillées : 12 x 1 600 = 19 200 heures
Productivité : 18 000 / 19 200 = 0,9375 ticket par heure

2. Productivité horaire année N+1
Heures travaillées : 14 x 1 600 = 22 400 heures
Productivité : 24 000 / 22 400 = 1,0714 ticket par heure

3. Taux de variation
(1,0714 - 0,9375) / 0,9375 x 100 = +14,3 %
La production de tickets augmente de 33,3 % alors que les heures augmentent de
16,7 % : la croissance est en partie intensive, il y a bien un gain de productivité.

4. Coût par ticket
Année N : 12 x 38 000 = 456 000 euros, soit 456 000 / 18 000 = 25,33 euros par ticket.
Année N+1 : 14 x 38 000 = 532 000 euros, soit 532 000 / 24 000 = 22,17 euros par ticket.
Le coût unitaire baisse d'environ 12,5 % : les charges de structure sont absorbées
par un volume plus élevé.

5. Lecture pour la décision
Les deux embauches sont rentables du point de vue du coût unitaire : 76 000 euros de
charges supplémentaires pour 6 000 tickets de plus, soit 12,67 euros de coût marginal
par ticket, très en dessous du coût moyen de 22,17 euros. Réserve : la productivité
ne dit rien de la qualité, il faut vérifier le taux de résolution au premier contact
et le délai de traitement avant de généraliser.`,
      checks: [
        { label: "La productivité horaire de l’année N est calculée (0,9375)", test: /0,93|0\.93/ },
        { label: "La productivité horaire de l’année N+1 est calculée (1,07)", test: /1,07|1\.07/ },
        { label: "Le taux de variation est calculé et signé", test: /14[,.]3|plus 14|\+ ?14/ },
        { label: "Le coût par ticket est calculé pour les deux années", test: /25[,.]33|22[,.]17/ },
        { label: "Le lien est fait entre volume, charges fixes et coût unitaire", test: /coût unitaire|charges fixes/i }
      ]
    },
    {
      id: "at-t3-seuil",
      title: "Seuil de rentabilité et point mort",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Une ESN vend un forfait de maintenance à <strong>240 € HT par mois et par poste</strong>. Le coût variable par poste est de <strong>132 €</strong> (licences, hébergement, hotline externalisée). Les charges fixes annuelles s’élèvent à <strong>216 000 €</strong>. La prévision de ventes est de <strong>3 000 forfaits</strong> sur l’année.</p>
      <p>Calcule la marge sur coût variable unitaire, le taux de marge, le seuil de rentabilité en volume et en valeur, le point mort en mois, et le résultat prévisionnel. Conclus sur le <strong>risque</strong> de ce modèle économique.</p>`,
      starter: `1. Marge sur coût variable unitaire
240 - 132 = ...`,
      model: `1. Marge sur coût variable unitaire
240 - 132 = 108 euros par forfait
Taux de marge sur coût variable : 108 / 240 = 45 %

2. Seuil de rentabilité en volume
Charges fixes / MCV unitaire = 216 000 / 108 = 2 000 forfaits

3. Seuil de rentabilité en valeur
2 000 x 240 = 480 000 euros de chiffre d'affaires
Vérification par le taux : 216 000 / 0,45 = 480 000 euros

4. Point mort
(480 000 / 720 000) x 12 = 8 mois
L'entreprise couvre ses charges au bout de 8 mois : elle travaille à perte de janvier
à août, puis dégage du résultat sur les quatre derniers mois.

5. Résultat prévisionnel
Chiffre d'affaires : 3 000 x 240 = 720 000 euros
MCV totale : 3 000 x 108 = 324 000 euros
Résultat : 324 000 - 216 000 = 108 000 euros, soit 15 % du chiffre d'affaires.

6. Risque du modèle
La marge de sécurité est de 1 000 forfaits (3 000 - 2 000), soit 33 % du volume prévu.
Une baisse de plus d'un tiers des ventes suffit à basculer en perte. Les charges fixes
représentent 216 000 euros, l'équivalent de 2 000 forfaits : le modèle est très sensible
au volume. Les deux leviers de sécurisation sont la renégociation des charges fixes et
l'augmentation du taux de marge par la valeur ajoutée de service.`,
      checks: [
        { label: "La marge sur coût variable unitaire est calculée (108 €)", test: /108/ },
        { label: "Le seuil en volume est calculé (2 000 forfaits)", test: /2 ?000/ },
        { label: "Le seuil en valeur est calculé (480 000 €)", test: /480 ?000/ },
        { label: "Le point mort est calculé (8 mois)", test: /8 mois/ },
        { label: "Le résultat prévisionnel est calculé (108 000 €)", test: /108 ?000/ },
        { label: "La marge de sécurité ou le risque de volume est discuté", test: /marge de sécurité|baisse[\s\S]{0,40}(ventes|volume)/i }
      ]
    },
    {
      id: "at-t3-structure",
      title: "Justifier le choix d’une structure juridique",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Trois anciens camarades de BTS SIO créent une activité de développement d’applications mobiles et de conseil. Éléments du dossier :</p>
      <ul>
        <li>capital disponible : 15 000 €, un investisseur propose 150 000 € dans dix-huit mois ;</li>
        <li>activité de conseil auprès de grands comptes, donc besoin de crédibilité ;</li>
        <li>risque juridique réel : les applications traitent des données de santé ;</li>
        <li>l’un des associés veut pouvoir sortir facilement dans trois ans ;</li>
        <li>ils refusent une gouvernance lourde et des formalités trimestrielles.</li>
      </ul>
      <p>Écris une réponse argumentée : <strong>écarte</strong> deux formes, <strong>recommande</strong> une forme, justifie par les critères du programme, et signale <strong>une clause statutaire</strong> à prévoir.</p>`,
      starter: `1. Formes écartées
L'entreprise individuelle : ...`,
      model: `1. Formes écartées

Entreprise individuelle : écartée. Un seul exploitant alors qu'ils sont trois, et
surtout une responsabilité illimitée sur le patrimoine personnel. Avec des données de
santé, le risque de contentieux est trop élevé pour engager les biens personnels.

SA : écartée. Capital minimum de 37 000 euros alors qu'ils disposent de 15 000 euros,
et gouvernance lourde (conseil d'administration, commissaire aux comptes, formalisme
des assemblées), ce qui contredit leur refus des formalités.

2. Forme recommandée : SAS

Responsabilité limitée aux apports : le risque juridique lié aux données de santé ne
menace pas le patrimoine personnel des associés.
Capital libre : 15 000 euros suffisent, et l'entrée de l'investisseur à hauteur de
150 000 euros se fait par augmentation de capital sans blocage statutaire.
Liberté statutaire : les statuts organisent les pactes d'associés, les clauses
d'agrément, les conditions de sortie et les droits de vote, là où la SARL est plus
rigide sur la cession de parts.
Crédibilité : c'est la forme attendue par les investisseurs et lisible pour les grands
comptes.
Président : personne physique ou morale, sans conseil d'administration obligatoire.

Comparaison résiduelle avec la SARL : elle conviendrait pour la responsabilité limitée,
mais son capital est moins lisible pour un investisseur et le régime des cessions de
parts est plus contraignant, alors qu'un associé veut sortir dans trois ans.

3. Clause statutaire à prévoir

Une clause d'agrément assortie d'un droit de préemption et d'une promesse de rachat à
prix déterminé par une formule de calcul, pour organiser la sortie de l'associé sans
blocage ni contentieux. À compléter par une clause de confidentialité et de
non-concurrence, indispensable dans une activité de conseil.

4. Conclusion

La SAS est la seule forme qui cumule responsabilité limitée, capital accessible,
souplesse de gouvernance et lisibilité pour un investisseur. Le choix ne repose donc
pas sur un critère unique mais sur la combinaison du risque, du financement et de la
gouvernance.`,
      checks: [
        { label: "Deux formes sont explicitement écartées avec un motif", test: /écartée/i },
        { label: "La responsabilité limitée est mobilisée comme critère", test: /responsabilité limitée/i },
        { label: "Le critère du capital est utilisé", test: /37 ?000|capital libre/i },
        { label: "La liberté statutaire est mise en avant", test: /liberté statutaire|souplesse|statuts/i },
        { label: "Une clause statutaire concrète est proposée", test: /clause d'agrément|préemption|pacte d'associés/i },
        { label: "Une recommandation unique est assumée", test: /SAS/ }
      ]
    }
  ]
},

/* ============================== 04 ============================== */
{
  id: "04-numerique",
  num: "04",
  title: "L’impact du numérique sur la vie de l’entreprise",
  tag: "Thème 4 du programme",
  hot: true,
  intro: "Le thème qui te parle le plus, et le plus piégeux : on attend du droit et de l’économie, pas de la technique. Le correcteur ne note pas la qualité d’une architecture, il note la qualification d’un contrat et la base légale d’un traitement.",
  cours: `
  <h2>1. Place de marché et relations d’échange</h2>
  <p>Une <strong>place de marché</strong> met en relation une offre et une demande sans nécessairement produire elle-même. Elle se rémunère par commission, abonnement, mise en avant ou services associés. Sa particularité économique : elle crée de la valeur en réduisant les coûts de recherche et l’asymétrie d’information.</p>
  <table class="tbl">
    <caption>Quatre relations d’échange</caption>
    <thead><tr><th>Relation</th><th>Qui vend à qui</th><th>Exemple</th></tr></thead>
    <tbody>
      <tr><td><strong>B to B</strong></td><td>Entreprise vers entreprise</td><td>Une ESN vend de l’infogérance à un industriel</td></tr>
      <tr><td><strong>B to C</strong></td><td>Entreprise vers consommateur</td><td>Une boutique en ligne de matériel informatique</td></tr>
      <tr><td><strong>C to C</strong></td><td>Consommateur vers consommateur</td><td>Revente entre particuliers sur une plateforme</td></tr>
      <tr><td><strong>B to G</strong></td><td>Entreprise vers administration</td><td>Marché public de maintenance ou de conseil</td></tr>
    </tbody>
  </table>
  <p>Chaque relation n’a pas le même régime juridique : en B to C, le consommateur bénéficie d’un droit de rétractation et de la protection contre les clauses abusives ; en B to B, les parties sont présumées égales et le droit de la consommation ne s’applique pas.</p>

  <h2>2. Externalités de réseau</h2>
  <ul>
    <li><strong>Directes</strong> : chaque utilisateur supplémentaire augmente la valeur pour les autres utilisateurs du même groupe (messagerie, réseau social).</li>
    <li><strong>Indirectes</strong> : la valeur augmente par la croissance d’un autre groupe d’utilisateurs (une solution de paiement vaut plus quand davantage de commerçants l’acceptent).</li>
    <li>Conséquence : <strong>rendements croissants d’adoption</strong>, concentration du marché, basculement des utilisateurs vers le plus grand réseau.</li>
    <li><strong>Coûts de changement</strong> et verrouillage : plus l’utilisateur a investi dans l’écosystème, plus partir lui coûte cher. C’est une barrière à l’entrée de nature technologique.</li>
  </ul>
  <p>Une externalité de réseau est positive pour l’utilisateur, mais elle peut devenir négative en cas de congestion ou de dégradation de la qualité. À ne pas confondre avec l’externalité environnementale du thème 1.</p>

  <h2>3. Économie collaborative</h2>
  <p>Trois critères : mise en relation de particuliers, échange de biens ou de services, et <strong>accès à un usage plutôt qu’à la propriété</strong>. On distingue les plateformes <strong>marchandes</strong> (rémunération, commission) et <strong>non marchandes</strong> (don, échange, entraide).</p>
  <p>Effets juridiques : la plateforme est en principe un intermédiaire, mais sa qualification peut évoluer si elle fixe le prix et contrôle l’exécution. Le statut des travailleurs de plateforme est un contentieux récurrent : la <strong>requalification en salariat</strong> dépend du lien de subordination réel, pas du contrat signé.</p>

  <h2>4. Normes et standards</h2>
  <p>Une <strong>norme</strong> est une règle technique élaborée par un organisme reconnu, d’application volontaire sauf si un texte la rend obligatoire. Un <strong>standard</strong> est une spécification technique de référence, souvent imposée par le marché ou par un consortium privé.</p>
  <p>Intérêt pour l’entreprise : <strong>interopérabilité</strong>, réduction des coûts de développement, confiance des clients, accès aux marchés publics, sécurité. Risque : <strong>verrouillage</strong> par un standard propriétaire, dépendance à un éditeur, coût de migration.</p>

  <h2>5. Données personnelles, CNIL et RGPD</h2>
  <p>Une <strong>donnée personnelle</strong> est toute information relative à une personne physique identifiée ou identifiable, directement ou indirectement. Une donnée <strong>sensible</strong> (santé, origine, religion, orientation sexuelle, biométrie) relève d’un régime renforcé.</p>
  <table class="tbl">
    <caption>Les six bases légales, à citer précisément</caption>
    <thead><tr><th>Base légale</th><th>Usage typique</th></tr></thead>
    <tbody>
      <tr><td>Consentement</td><td>Newsletter, cookies non essentiels</td></tr>
      <tr><td>Contrat</td><td>Exécution d’un abonnement, d’une prestation</td></tr>
      <tr><td>Obligation légale</td><td>Facturation, conservation comptable</td></tr>
      <tr><td>Intérêt légitime</td><td>Vidéosurveillance, prévention de la fraude</td></tr>
      <tr><td>Mission d’intérêt public</td><td>Traitements des administrations</td></tr>
      <tr><td>Intérêts vitaux</td><td>Urgence médicale</td></tr>
    </tbody>
  </table>
  <p><strong>Principes</strong> : finalité déterminée, minimisation, exactitude, durée limitée, intégrité et confidentialité, responsabilité du responsable de traitement. <strong>Droits</strong> : accès, rectification, effacement, limitation, opposition, portabilité.</p>
  <p><strong>Obligations opérationnelles</strong> : registre des traitements, information des personnes, <strong>contrat de sous-traitance</strong> avec chaque prestataire, analyse d’impact pour les traitements à risque, notification d’une violation à la CNIL sous <strong>72 heures</strong>, désignation d’un <strong>DPO</strong> lorsque l’activité l’exige.</p>
  <p><strong>CNIL</strong> : autorité administrative indépendante. Elle informe, accompagne, contrôle et sanctionne, jusqu’à 4 % du chiffre d’affaires mondial ou 20 millions d’euros.</p>
  <div class="callout callout--key">
    <span class="callout__label">Le réflexe SIO</span>
    <p>Dans une prestation informatique, l’ESN est presque toujours <strong>sous-traitant</strong> au sens du RGPD, le client étant responsable de traitement. Conséquence concrète : contrat écrit obligatoire, instructions documentées, aucune décision autonome sur la finalité, et clause de sortie avec restitution ou destruction des données.</p>
  </div>

  <h2>6. Protection des actifs immatériels</h2>
  <ul>
    <li><strong>Droit d’auteur</strong> : protège le code source en tant qu’œuvre de l’esprit, dès sa création, sans dépôt. Il protège l’expression, pas l’idée ni la fonction.</li>
    <li><strong>Titularité</strong> : les droits patrimoniaux sur un logiciel créé par un salarié dans l’exercice de ses fonctions sont transférés à l’employeur par la loi. Pour un prestataire indépendant, <strong>la cession doit être écrite</strong> et délimiter les droits cédés.</li>
    <li><strong>Licences</strong> : propriétaire (droit d’usage limité), libre (GPL avec obligation de redistribution, MIT ou Apache plus permissives). La licence détermine ce que le client peut faire, pas le prix.</li>
    <li><strong>Base de données</strong> : protégée par le droit d’auteur sur la structure et par un droit spécifique sur le contenu lorsque l’investissement est substantiel.</li>
    <li><strong>Contrefaçon</strong> : usage non autorisé, sanctions civiles et pénales, dommages et intérêts.</li>
  </ul>
  <p>Le logiciel n’est pas brevetable en tant que tel : l’invention technique sous-jacente peut l’être, le code non. La réponse « on brevette le code » est fausse.</p>

  <h2>7. Identité numérique et preuve électronique</h2>
  <p>L’<strong>identité numérique</strong> est l’ensemble des traces et identifiants rattachés à une personne en ligne. Elle pose trois questions : l’identification, l’authentification, et la protection contre l’usurpation, le hameçonnage et l’atteinte à la e-réputation.</p>
  <p><strong>Preuve électronique</strong> : l’écrit électronique a la même valeur probante que l’écrit papier si l’on peut identifier la personne dont il émane et garantir l’intégrité du contenu. Trois niveaux de signature : <strong>simple</strong>, <strong>avancée</strong>, <strong>qualifiée</strong> (certificat qualifié, présomption de fiabilité maximale). L’<strong>horodatage</strong> qualifié date le document de façon fiable.</p>
  <p>Conservation : journalisation, empreinte de hachage, coffre-fort électronique. Un simple courriel peut prouver, à condition d’être identifié et non altéré : c’est le juge qui apprécie.</p>

  <h2>8. Vente électronique et prestation de service numérique</h2>
  <table class="tbl">
    <caption>Deux contrats, deux logiques</caption>
    <thead><tr><th></th><th>Vente électronique</th><th>Prestation de service numérique</th></tr></thead>
    <tbody>
      <tr><td>Objet</td><td>Transfert de propriété d’un bien</td><td>Réalisation d’une prestation : développement, hébergement, maintenance</td></tr>
      <tr><td>Obligation</td><td>Livrer un bien conforme</td><td>Obligation de moyens ou de résultat, selon ce qui est promis</td></tr>
      <tr><td>Points clés</td><td>Information précontractuelle, double clic, confirmation, <strong>rétractation de 14 jours</strong> en B to C, garantie légale de conformité</td><td>Périmètre, <strong>niveaux de service</strong>, confidentialité, propriété intellectuelle des livrables, <strong>réversibilité</strong></td></tr>
      <tr><td>Risque principal</td><td>Clause abusive, défaut de conformité</td><td>Dépendance au prestataire, perte de données, sortie impossible</td></tr>
    </tbody>
  </table>
  <p><strong>Exceptions à la rétractation</strong> : biens personnalisés, biens périssables, contenu numérique fourni immédiatement avec accord exprès et renoncement. À citer, la question tombe souvent sur « le client peut-il se rétracter ».</p>
  <p><strong>Clauses à vérifier dans un contrat de service numérique</strong> : niveau de service et pénalités, plages de maintenance, sauvegarde et restitution des données, réversibilité, sous-traitance et localisation, propriété intellectuelle, confidentialité, limitation de responsabilité, durée et résiliation.</p>

  <h2>9. Système d’information et management</h2>
  <p>Le <strong>système d’information</strong> collecte, stocke, traite et diffuse l’information. Ce n’est pas un outil neutre : il structure les processus et les décisions.</p>
  <ul>
    <li><strong>Opportunités</strong> : réactivité, coordination à distance, travail collaboratif, traçabilité, aide à la décision, nouveaux modèles d’affaires.</li>
    <li><strong>Risques</strong> : dépendance à un fournisseur, coût total de possession sous-estimé, obsolescence, sécurité et fuite de données, surcharge informationnelle, déshumanisation de la relation.</li>
    <li><strong>Effets managériaux</strong> : réduction des niveaux hiérarchiques, autonomie accrue des équipes, contrôle plus continu, nécessité d’un alignement entre stratégie et système d’information.</li>
  </ul>
  `,
  cards: [
    { id: "t4a", q: "Quatre formes de relations d'échange à distinguer ?", a: "<strong>B to B</strong> (entreprise à entreprise), <strong>B to C</strong> (entreprise à consommateur), <strong>C to C</strong> (entre particuliers via une plateforme) et <strong>B to G</strong> (entreprise à administration publique)." },
    { id: "t4b", q: "Qu'est-ce qu'une externalité de réseau ?", a: "L'utilité d'un bien augmente avec le nombre d'utilisateurs : un réseau social ou une place de marché vaut plus quand il y a plus de monde. Effet direct sur les stratégies de croissance et de standardisation." },
    { id: "t4c", q: "Place de marché : définition et effet sur les prix ?", a: "Plateforme numérique qui met en relation offre et demande (Amazon, Leboncoin). Elle <strong>abaissant les coûts de recherche</strong> et accroît la transparence, ce qui pressionne les prix à la baisse, mais elle peut aussi créer une dépendance et une position dominante." },
    { id: "t4d", q: "Que protège le droit d'auteur et que ne protège-t-il pas ?", a: "Il protège les <strong>œuvres de l'esprit</strong> (code source, textes, images) dès leur création, sans formalité. Il ne protège <strong>pas les idées</strong>, seulement leur expression. Le logiciel est protégé par un régime spécifique du Code de la propriété intellectuelle." },
    { id: "t4e", q: "Que signifie « licencier » un logiciel open source ?", a: "Ce n'est pas vendre : c'est accorder des <strong>droits d'utilisation</strong> encadrés par une licence (GPL, MIT, Apache). La licence fixe ce qu'on peut faire : modifier, redistribuer, usage commercial, obligation de publier les modifications." },
    { id: "t4f", q: "Quel est le rôle de la CNIL ?", a: "Autorité administrative indépendante chargée du respect de la <strong>protection des données personnelles</strong> : information, contrôle, sanctions, référentiels, et guichet de notification des violations. Elle ne fait pas de la cybersécurité opérationnelle." },
    { id: "t4g", q: "Quelles sont les deux obligations principales du RGPD pour une entreprise ?", a: "<strong>Responsabilité</strong> (documenter la conformité, registre des traitements, base légale) et <strong>sécurité</strong> (mesures techniques et organisationnelles adaptées au risque). Plus : information des personnes et notification des violations sous 72 h si risque." },
    { id: "t4h", q: "Qu'est-ce que la preuve électronique ?", a: "Un écrit électronique a la même valeur qu'un écrit papier s'il peut être identifié, conservé et produit dans des conditions fiables. L'<strong>horodatage</strong> et la <strong>signature électronique</strong> sécurisent la preuve." },
    { id: "t4i", q: "Différence entre contrat de vente électronique et contrat de prestation de service numérique ?", a: "La vente transfère un bien (obligation de livraison conforme) ; la prestation fournit un service (obligation de moyens ou de résultat selon ce qui est promis). Une prestation implique un périmètre, des niveaux de service et une réversibilité." },
    { id: "t4j", q: "Délai de rétractation dans une vente en ligne à un consommateur ?", a: "<strong>14 jours</strong> à compter de la réception du bien, en B to C. Exceptions : biens personnalisés, périssables, et contenus numériques fournis immédiatement avec accord exprès et renoncement." },
    { id: "t4k", q: "Trois clauses clés d'un contrat de service numérique ?", a: "<strong>Niveau de service et pénalités</strong>, <strong>sauvegarde et restitution des données (réversibilité)</strong>, <strong>propriété intellectuelle des livrables</strong>. Ajoute : confidentialité, sous-traitance et localisation, limitation de responsabilité." },
    { id: "t4l", q: "Quels risques managériaux d'un déploiement de SI mal préparé ?", a: "Dépendance à un fournisseur, coût total de possession sous-estimé, obsolescence, faille de sécurité, surcharge informationnelle, perte de compétences internes et résistance des utilisateurs." }
  ],
  ateliers: [
    {
      id: "at-saas-clauses",
      title: "Qualifie le contrat et flague les clauses",
      lang: "text",
      prompt: `<p>Une PME informatique souscrit un abonnement à une plateforme de gestion de projet hébergée hors de France, 120 utilisateurs, 900 € par mois. Le contrat prévoit : hébergement des données hors Union européenne, aucune clause de niveau de service, restitution des données « sur demande écrite, sous 30 jours, dans un format propriétaire », résiliation avec préavis de 3 mois, aucune obligation de sauvegarde indiquée.</p>
      <p>1) Qualifie juridiquement le contrat. 2) Identifie trois clauses à risque et explique le risque concret pour la PME.</p>`,
      starter: `1) Qualification : `,
      model: `1) Qualification : il s'agit d'un contrat de prestation de service numérique conclu avec un prestataire de cloud, à titre onéreux et pour une durée déterminée avec tacite reconduction. Le client n'achète pas un logiciel, il achète l'accès à un service : c'est un contrat d'abonnement, pas une vente, donc l'obligation du prestataire est une obligation de moyens assortie de niveaux de service.

2) Clauses à risque :
- Hébergement hors Union européenne sans clause contractuelle type ni garanties de transfert : risque de non-conformité au RGPD sur le transfert de données personnelles (salariés, clients), et donc risque de sanction CNIL.
- Absence de niveau de service et de pénalités : aucun recours en cas d'indisponibilité, alors que l'activité dépend de la plateforme tous les jours.
- Restitution dans un format propriétaire : risque de verrouillage et de perte de réversibilité, l'entreprise ne pourrait pas récupérer exploitablement son historique de projets.
- Absence de clause de sauvegarde : le prestataire ne s'engage sur rien, la PME reste responsable du traitement et donc de la sécurité des données.`,
      checks: [
        { label: "Qualification : prestation de service numérique", test: /prestation de service num[ée]rique/i },
        { label: "Distinction avec la vente", test: /(pas une vente|n'est pas une vente|pas un contrat de vente)/i },
        { label: "Risque RGPD sur le transfert hors UE", test: /(hors union europ[ée]enne|transfert)[\s\S]{0,200}(rgpd|cnil)|(rgpd|cnil)[\s\S]{0,200}(transfert|hors union)/i },
        { label: "Risque de verrouillage / réversibilité", test: /(verrouillage|r[ée]versibilit[ée]|format propri[ée]taire)/i },
        { label: "Absence de niveau de service pointée", test: /(niveau de service|sla)/i },
        { label: "Responsabilité du traitement rappelée", test: /(responsable du traitement|responsabilit[ée])/i }
      ]
    }
  ]
},

/* ============================== 05 ============================== */
{
  id: "05-travail",
  num: "05",
  title: "Les mutations du travail",
  tag: "Thème 5 du programme",
  hot: false,
  intro: "Deux versants : économique (marché du travail) et juridique (contrat de travail, rupture). Le versant juridique est celui qui rapporte le plus, parce qu'il se qualifie et se démontre.",
  cours: `
  <h2>1. Le marché du travail</h2>
  <ul>
    <li><strong>Offre de travail</strong> : les personnes qui proposent leur force de travail. <strong>Demande de travail</strong> : les entreprises qui recrutent.</li>
    <li><strong>Segmentation</strong> : marché primaire (emplois stables, qualifiés, protecteurs) et marché secondaire (emplois précaires, peu qualifiés, forte rotation).</li>
    <li><strong>Déséquilibres</strong> : chômage, tension sur certains métiers (informatique, santé), inadéquation entre formation et besoins.</li>
    <li><strong>Politique de l'emploi</strong> : dispositifs d'aide à l'embauche, formation, alternance, indemnisation, accompagnement des reconversions.</li>
  </ul>

  <h2>2. Les sources du droit du travail</h2>
  <pre class="codeblock"><code class="lang-text">Constitution et bloc de constitutionnalite
Traites internationaux et droit de l'Union europeenne
Loi et reglements
Conventions collectives de branche et accords d'entreprise
Usages et engagement unilateral
Contrat de travail (ne peut pas etre moins favorable que la loi)</code></pre>
  <p>Depuis la loi du 8 août 2016, dans certains domaines limitativement énumérés (temps de travail notamment), <strong>l'accord d'entreprise peut primer sur l'accord de branche</strong>. Le principe de faveur n'est donc plus absolu : ne pas l'affirmer sans nuance.</p>

  <h2>3. Salarié ou indépendant : le critère décisif</h2>
  <p>C'est le <strong>lien de subordination</strong> : ordres, contrôle, sanctions. Un contrat peut être intitulé « prestation » et être requalifié en contrat de travail si le lien de subordination existe. Conséquences : cotisations, protection, congés, prud'hommes.</p>
  <p>Le <strong>portage salarial</strong> et la <strong>plateforme</strong> numérique brouillent la frontière, mais le critère reste le même.</p>

  <h2>4. Les contrats de travail</h2>
  <pre class="codeblock"><code class="lang-text">CDI            forme de droit commun, sans terme
CDD            motif precis et limite (remplacement, accroissement temporaire),
               terme fixe, renouvellement encadre
Alternance     apprentissage ou professionnalisation, formation + entreprise
Interim        relation triangulaire (salarie, agence, entreprise utilisatrice)
Stage          pas un contrat de travail (convention, gratification legale)</code></pre>
  <ul>
    <li><strong>Période d'essai</strong> : durées légales de 2, 3 ou 4 mois selon la catégorie (ouvriers, techniciens et agents de maîtrise, cadres), prolongeables par accord de branche dans les limites prévues. Elle doit être prévue par écrit.</li>
    <li><strong>Clauses possibles</strong> : mobilité, confidentialité, exclusivité (à justifier et limiter), dédit-formation.</li>
  </ul>

  <h2>5. Modification du contrat ou changement des conditions de travail</h2>
  <pre class="codeblock"><code class="lang-text">Modification du contrat       accord du salarie requis
  (salaire, duree, lieu, poste)
Changement des conditions     pouvoir de direction de l'employeur
  (horaires, organisation)    si le contrat ne le prohibe pas</code></pre>
  <p>Exemple : passer d'un horaire de jour à un horaire de nuit, ou déplacer le lieu de travail hors la zone contractuelle, exige l'accord du salarié. Changer le planning dans le respect des délais de prévenance relève du pouvoir de direction.</p>

  <h2>6. La rupture</h2>
  <ul>
    <li><strong>Démission</strong> : initiative du salarié, préavis sauf dispense.</li>
    <li><strong>Licenciement personnel</strong> : motif réel et sérieux (faute, insuffisance professionnelle), procédure à respecter (convocation, entretien préalable, notification écrite motivée).</li>
    <li><strong>Licenciement économique</strong> : motif économique à établir, critères d'ordre, obligations de reclassement.</li>
    <li><strong>Rupture conventionnelle</strong> : accord des deux parties, entretien, homologation par la <strong>DREETS</strong>, puis droit à l'allocation chômage.</li>
    <li><strong>Prise d'acte / résiliation judiciaire</strong> : le salarié prend acte d'un manquement grave de l'employeur, la justice tranche.</li>
  </ul>

  <h2>7. Dialogue social et gestion des compétences</h2>
  <ul>
    <li><strong>CSE</strong> (comité social et économique) : représentation du personnel, consultations, alertes, rôle en santé et sécurité.</li>
    <li><strong>Droit négocié</strong> : accord d'entreprise, de branche, NAO sur les salaires.</li>
    <li><strong>GPEC</strong> : gestion prévisionnelle des emplois et des compétences, pour anticiper les besoins plutôt que subir les licenciements.</li>
    <li><strong>Télétravail</strong> : encadré par accord collectif, charte ou accord individuel, sur la base du volontariat, avec période d'adaptation et réversibilité.</li>
    <li><strong>Motivation</strong> : autonomie, reconnaissance, sens, conditions matérielles, perspective d'évolution. Un salaire seul ne fidélise pas un profil IT.</li>
  </ul>
  `,
  cards: [
    { id: "t5a", q: "Quel est le critère décisif du contrat de travail ?", a: "Le <strong>lien de subordination</strong> : l'employeur donne des ordres, contrôle l'exécution et peut sanctionner. Le nom du contrat ne compte pas, les faits oui." },
    { id: "t5b", q: "Peut-on requalifier une prestation en contrat de travail ?", a: "<strong>Oui</strong>, si le lien de subordination est établi (ordres, contrôle, horaires imposés). Conséquence pour le prestataire : protection du salarié, congés, cotisations, accès aux prud'hommes." },
    { id: "t5c", q: "Un CDD sans motif précis est-il valide ?", a: "<strong>Non.</strong> Le CDD exige un motif limitativement énuméré (remplacement d'un salarié absent, accroissement temporaire d'activité, emploi à caractère saisonnier...). À défaut, il peut être requalifié en CDI." },
    { id: "t5d", q: "Modification du contrat ou changement des conditions de travail ?", a: "La <strong>modification du contrat</strong> (salaire, durée, lieu, qualification) nécessite l'accord du salarié. Le <strong>changement des conditions</strong> (horaires, organisation) relève du pouvoir de direction de l'employeur." },
    { id: "t5e", q: "Qui homologue la rupture conventionnelle ?", a: "La <strong>DREETS</strong> (ex-Direccte), après un entretien entre les parties et un délai de rétractation. Elle ouvre droit à l'assurance chômage." },
    { id: "t5f", q: "Licenciement personnel : quelles étapes ?", a: "Convocation à un <strong>entretien préalable</strong>, entretien, puis <strong>notification écrite et motivée</strong>. Le motif doit être réel et sérieux ; la procédure est contrôlée par le juge." },
    { id: "t5g", q: "Que signifie GPEC ?", a: "<strong>Gestion prévisionnelle des emplois et des compétences</strong> : anticiper l'évolution des métiers et des compétences pour éviter les licenciements et sécuriser les parcours (formation, mobilité)." },
    { id: "t5h", q: "Le télétravail peut-il être imposé au salarié ?", a: "<strong>Non</strong> en principe : il repose sur le volontariat, encadré par accord collectif, charte ou accord individuel, avec période d'adaptation et possibilité de retour au présentiel." },
    { id: "t5i", q: "Qu'est-ce que le CSE ?", a: "<strong>Comité social et économique</strong> : instance unique de représentation du personnel (ex-délégués du personnel, CE, CHSCT), consultée sur les décisions importantes et compétente en santé et sécurité." },
    { id: "t5j", q: "L'accord d'entreprise peut-il être moins favorable que la branche ?", a: "<strong>Dans certains domaines seulement</strong> (temps de travail notamment), depuis la loi du 8 août 2016. Ailleurs, l'accord de branche ou la loi s'applique. Ne pas affirmer un principe de faveur absolu." },
    { id: "t5k", q: "Trois facteurs de motivation hors salaire ?", a: "<strong>Autonomie</strong>, <strong>reconnaissance</strong> et <strong>sens du travail</strong>. Ajoute : conditions matérielles, perspective d'évolution, qualité de la relation managériale." }
  ],
  ateliers: [
    {
      id: "at-rupture",
      title: "Qualifie la rupture",
      lang: "text",
      prompt: `<p>Cas : Léa, développeuse en CDI depuis trois ans, voit son employeur lui proposer de passer en horaires de nuit avec le même salaire. Elle refuse. Deux semaines plus tard, l'employeur lui annonce par courriel qu'elle est « licenciée pour refus d'obéissance », sans entretien préalable.</p>
      <p>1) La demande de passage en horaires de nuit nécessitait-elle l'accord de Léa ? 2) La procédure de licenciement est-elle régulière ? 3) Quelles conséquences pour l'employeur ?</p>`,
      starter: `1) `,
      model: `1) Oui. Le passage d'un horaire de jour à un horaire de nuit constitue une modification du contrat de travail, car il bouleverse l'organisation personnelle et familiale du salarié. Elle nécessite donc l'accord exprès de Léa, que son refus est parfaitement légitime.

2) Non. Le licenciement suppose une convocation à un entretien préalable, un entretien, un délai de réflexion puis une notification écrite et motivée. Ici, tout est fait par courriel, sans entretien préalable : la procédure est irrégulière.

3) Le licenciement est sans cause réelle et sérieuse puisque le refus d'une modification du contrat n'est pas une faute. L'employeur s'expose à des dommages et intérêts devant les prud'hommes, à une indemnité pour procédure irrégulière, et éventuellement à la réintégration si elle la demande.`,
      checks: [
        { label: "Modification du contrat identifiée", test: /modification du contrat/i },
        { label: "Accord du salarié requis", test: /(accord (expr[èe]s |du salari)|n[ée]cessite l'accord)/i },
        { label: "Procédure irrégulière : entretien préalable manquant", test: /entretien pr[ée]alable/i },
        { label: "Absence de cause réelle et sérieuse", test: /(sans cause r[ée]elle et s[ée]rieuse|pas une faute|refus l[ée]gitime)/i },
        { label: "Conséquence : prud'hommes / dommages et intérêts", test: /(prud'?hommes|dommages et int[ée]r[êe]ts)/i }
      ]
    }
  ]
},

/* ============================== 06 ============================== */
{
  id: "06-strategie",
  num: "06",
  title: "Les choix stratégiques",
  tag: "Thème 6 du programme",
  hot: false,
  intro: "Le thème le plus « scolaire » : diagnostic, options, modalités de croissance. Si tu structures ta réponse dans cet ordre, tu marques les points même avec un cas que tu ne connais pas.",
  cours: `
  <h2>1. La démarche stratégique</h2>
  <pre class="codeblock"><code class="lang-text">1. Diagnostic externe   menaces et opportunites (PESTEL, forces concurrentielles)
2. Diagnostic interne   forces et faiblesses (ressources, competences, chaine de valeur)
3. Synthese (SWOT)      confrontation interne / externe
4. Options strategiques specialisation, diversification, integration
5. Modalites            croissance organique, externe, conjointe
6. Mise en oeuvre       moyens, planning, indicateurs de suivi</code></pre>
  <p>Une réponse qui saute du diagnostic à la solution sans passer par les options perd des points : la grille évalue le <strong>raisonnement</strong>, pas la conclusion.</p>

  <h2>2. Le diagnostic externe (PESTEL)</h2>
  <ul>
    <li><strong>P</strong>olitique : stabilité, politiques publiques, marchés publics.</li>
    <li><strong>É</strong>conomique : croissance, inflation, taux d'intérêt, pouvoir d'achat.</li>
    <li><strong>S</strong>ocioculturel : usages, attentes des clients, démographie.</li>
    <li><strong>T</strong>echnologique : innovations, obsolescence, standards.</li>
    <li><strong>E</strong>nvironnemental : énergie, empreinte, réglementation climat.</li>
    <li><strong>L</strong>égal : RGPD, NIS2, droit du travail, propriété intellectuelle.</li>
  </ul>
  <p>Complète avec les <strong>cinq forces</strong> de Porter : concurrence intra-sectorielle, menaces de nouveaux entrants et de produits substituts, pouvoir de négociation des clients et des fournisseurs.</p>

  <h2>3. Le diagnostic interne</h2>
  <ul>
    <li><strong>Ressources tangibles</strong> : matériel, locaux, trésorerie, effectifs.</li>
    <li><strong>Ressources intangibles</strong> : marque, brevets, données, savoir-faire, réputation, culture.</li>
    <li><strong>Compétences distinctives</strong> : ce que l'entreprise fait mieux que les autres, difficile à imiter.</li>
    <li><strong>Chaîne de valeur</strong> : activités principales et de soutien ; on cherche où se crée la marge.</li>
  </ul>

  <h2>4. Les options stratégiques</h2>
  <pre class="codeblock"><code class="lang-text">Specialisation        un seul metier, approfondi
Diversification       nouveaux metiers
  horizontale         nouveaux produits, meme marche
  verticale           amont (fournisseur) ou aval (distributeur)
  conglomerale        activites sans lien
Integration verticale internaliser une etape (faire au lieu de faire-faire)
Internationalisation  nouveaux marches geographiques</code></pre>

  <h2>5. Les modalités de croissance</h2>
  <ul>
    <li><strong>Organique (interne)</strong> : croissance par ses propres moyens. Lente, maîtrisée, coûteuse en trésorerie, sans dilution du capital.</li>
    <li><strong>Externe</strong> : fusion, acquisition. Rapide, accès immédiat à un marché ou une technologie, mais risque d'intégration, de surpayé et de dette.</li>
    <li><strong>Conjointe</strong> : alliance, joint-venture, partenariat, licence. Partage des coûts et des risques, mais dépendance et partage de la valeur.</li>
  </ul>

  <h2>6. L'avantage concurrentiel</h2>
  <ul>
    <li><strong>Par les coûts</strong> : produire moins cher (volume, automatisation, externalisation).</li>
    <li><strong>Par la différenciation</strong> : qualité, service, image, innovation, expérience client.</li>
    <li><strong>Par la focalisation</strong> : dominer un segment étroit plutôt que tout le marché.</li>
  </ul>
  <p>Un avantage concurrentiel doit être <strong>pertinent pour le client</strong>, <strong>difficile à imiter</strong> et <strong>soutenable dans le temps</strong>. Sinon c'est un avantage temporaire.</p>

  <h2>7. Lien avec les métiers SIO</h2>
  <p>Dans un cas informatique, l'avantage concurrentiel passe souvent par la <strong>donnée</strong> (exploitation, qualité), l'<strong>automatisation</strong> des processus, la <strong>qualité de service</strong> et la <strong>confiance</strong> (sécurité, conformité). Une PME qui externalise son SI doit arbitrer entre coût, maîtrise et dépendance : c'est exactement un choix stratégique.</p>
  `,
  cards: [
    { id: "t6a", q: "Dans quel ordre construire une réponse stratégique ?", a: "<strong>Diagnostic externe</strong> (PESTEL, Porter) → <strong>diagnostic interne</strong> (ressources, compétences) → <strong>synthèse SWOT</strong> → <strong>options</strong> → <strong>modalités de croissance</strong> → mise en œuvre et indicateurs." },
    { id: "t6b", q: "Que signifie le E de PESTEL ?", a: "<strong>Environnemental</strong> : énergie, empreinte carbone, ressources, réglementation climatique. À ne pas confondre avec le É économique." },
    { id: "t6c", q: "Cite trois des cinq forces de Porter.", a: "Concurrence intra-sectorielle, menace de nouveaux entrants, menace de produits substituts, pouvoir de négociation des clients, pouvoir de négociation des fournisseurs." },
    { id: "t6d", q: "Différence entre croissance organique et externe ?", a: "<strong>Organique</strong> : par ses propres moyens (lente, maîtrisée, sans dilution). <strong>Externe</strong> : fusion-acquisition (rapide, coûteuse, risque d'intégration et de surpayé)." },
    { id: "t6e", q: "Qu'est-ce qu'une croissance conjointe ?", a: "Une croissance par <strong>alliance</strong> : joint-venture, partenariat, licence. Coûts et risques partagés, mais dépendance réciproque et partage de la valeur." },
    { id: "t6f", q: "Spécialisation ou diversification : quel critère de choix ?", a: "La spécialisation renforce l'expertise et la marge sur un métier maîtrisé ; la diversification répartit le risque et ouvre de nouveaux relais de croissance. Le choix dépend des ressources disponibles et de la maturité du marché initial." },
    { id: "t6g", q: "Qu'est-ce qu'une diversification verticale ?", a: "L'entreprise internalise une étape située en <strong>amont</strong> (fournisseur, production) ou en <strong>aval</strong> (distribution, service). C'est aussi une intégration verticale." },
    { id: "t6h", q: "Trois conditions d'un avantage concurrentiel durable ?", a: "<strong>Pertinence pour le client</strong>, <strong>difficulté à imiter</strong>, <strong>soutenabilité</strong> dans le temps. Sans ces trois, l'avantage est temporaire." },
    { id: "t6i", q: "Qu'est-ce qu'une compétence distinctive ?", a: "Un savoir-faire que l'entreprise maîtrise mieux que ses concurrents et difficile à reproduire : données propriétaires, expertise technique, réseau, culture d'exécution." },
    { id: "t6j", q: "Externaliser le SI : quel arbitrage stratégique ?", a: "Gain de coût et accès à une expertise contre <strong>perte de maîtrise</strong>, <strong>dépendance au prestataire</strong> et risque de réversibilité. C'est la décision « faire ou faire-faire » appliquée au SI." }
  ],
  ateliers: [
    {
      id: "at-diagnostic",
      title: "Diagnostic et recommandation",
      lang: "text",
      prompt: `<p>Cas : une PME de 40 salariés édite un logiciel de gestion pour des cabinets comptables. Son chiffre d'affaires stagne depuis deux ans. Ses clients se plaignent de l'ergonomie et demandent un accès en ligne, que l'entreprise ne propose pas. Un concurrent américain arrive sur le marché français avec un abonnement mensuel. La PME détient un savoir-faire métier reconnu et une base de 600 clients fidèles, mais son équipe technique compte trois développeurs et son dirigeant refuse l'endettement.</p>
      <p>1) Deux éléments de diagnostic externe et deux de diagnostic interne. 2) Une option stratégique argumentée, avec sa modalité de croissance. 3) Un risque de ce choix.</p>`,
      starter: `1) Diagnostic externe : `,
      model: `1) Diagnostic externe : l'arrivée d'un concurrent américain en abonnement constitue une menace concurrentielle forte, car elle change le modèle économique du marché et fait pression sur les prix. La demande des clients pour un accès en ligne est une opportunité technologique et socioculturelle : le marché se déplace vers le SaaS.

Diagnostic interne : la base de 600 clients fidèles et le savoir-faire métier reconnu sont des ressources intangibles difficilement imitables, donc une force réelle. En revanche, l'équipe de trois développeurs et le refus de l'endettement sont des faiblesses : capacité de développement et de financement limitées.

2) Option stratégique : une spécialisation défendue par la différenciation, en passant du logiciel installé à une offre en ligne hébergée, centrée sur le métier comptable. La modalité de croissance la plus réaliste est conjointe : un partenariat avec un hébergeur ou un éditeur complémentaire, plutôt qu'une croissance organique que la taille de l'équipe ne permet pas.

3) Risque : la dépendance au partenaire technique et la perte de maîtrise sur les données clients, avec un enjeu RGPD et de réversibilité si le partenariat s'arrête.`,
      checks: [
        { label: "Menace concurrentielle identifiée", test: /(concurrent|am[ée]ricain)[\s\S]{0,120}(menace)/i },
        { label: "Opportunité : passage au SaaS / accès en ligne", test: /(saas|en ligne|abonnement)/i },
        { label: "Force interne : clients fidèles ou savoir-faire", test: /(600 clients|fid[èe]les|savoir-faire)/i },
        { label: "Faiblesse interne : effectif ou financement", test: /(trois d[ée]veloppeurs|effectif|endettement|capacit[ée] de financement)/i },
        { label: "Option : spécialisation ou différenciation", test: /(sp[ée]cialisation|diff[ée]renciation)/i },
        { label: "Modalité : croissance conjointe / partenariat", test: /(conjointe|partenariat|alliance)/i },
        { label: "Risque : dépendance ou réversibilité", test: /(d[ée]pendance|r[ée]versibilit[ée]|RGPD)/i }
      ]
    }
  ]
},

/* ============================== 06 bis ============================== */
{
  id: "06b-equilibre-financier",
  num: "06 bis",
  title: "L’équilibre financier : bilan, FR, BFR, trésorerie",
  tag: "Économie · analyse financière",
  hot: true,
  intro: "Bilan, fonds de roulement, besoin en fonds de roulement, trésorerie nette : quatre notions qui reviennent dans presque tous les sujets et qui se ramassent avec un calcul juste et trois phrases d’interprétation. Un FR positif ne veut pas dire « il y a de l’argent », une trésorerie négative ne veut pas dire « faillite ».",
  cours: `
  <h2>1. Le bilan : une photographie, pas un film</h2>
  <p>Le bilan décrit le <strong>patrimoine à une date de clôture</strong>. Deux colonnes, toujours égales : à gauche les <strong>emplois</strong> (à quoi l’argent a servi), à droite les <strong>ressources</strong> (d’où il vient). Le compte de résultat, lui, raconte l’année : produits moins charges. Confondre les deux est la faute la plus coûteuse en E4.</p>
  <table class="tbl">
    <caption>Structure simplifiée d’un bilan</caption>
    <thead><tr><th>Actif (les emplois)</th><th>Passif (les ressources)</th></tr></thead>
    <tbody>
      <tr><td><strong>Actif immobilisé</strong> : incorporel (brevet, logiciel, fonds commercial), corporel (terrain, construction, matériel), financier (titres, dépôts de garantie)</td><td><strong>Capitaux propres</strong> : capital social, réserves, report à nouveau, résultat de l’exercice</td></tr>
      <tr><td><strong>Actif circulant</strong> : stocks, créances clients, autres créances, valeurs mobilières de placement</td><td><strong>Amortissements, dépréciations et provisions</strong></td></tr>
      <tr><td><strong>Trésorerie actif</strong> : banque, caisse</td><td><strong>Dettes financières à plus d’un an</strong> : emprunts, crédit-bail</td></tr>
      <tr><td></td><td><strong>Passif circulant</strong> : dettes fournisseurs, dettes fiscales et sociales, autres dettes</td></tr>
      <tr><td></td><td><strong>Trésorerie passif</strong> : concours bancaires courants, découvert</td></tr>
    </tbody>
  </table>
  <div class="callout callout--warn">
    <span class="callout__label">Piège comptable à connaître</span>
    <p>Selon la présentation retenue, les <strong>amortissements et dépréciations</strong> figurent au passif (système de base) ou sont déduits de l’actif (bilan « net »). Les deux lectures sont justes tant qu’on ne les compte pas deux fois. Dans un sujet, garde la présentation du document et signale-la.</p>
  </div>
  <p><strong>Total actif = total passif</strong> par construction. Ce n’est donc <em>pas</em> un indicateur de santé : un bilan peut être parfaitement équilibré et l’entreprise au bord du dépôt de bilan.</p>

  <h2>2. Emplois stables et ressources stables : le fonds de roulement</h2>
  <ul>
    <li><strong>Emplois stables</strong> = actif immobilisé net. Ce qui est engagé durablement dans l’outil de production.</li>
    <li><strong>Ressources stables</strong> = <strong>capitaux permanents</strong> = capitaux propres + amortissements et dépréciations + provisions + dettes financières à plus d’un an.</li>
    <li><strong>Fonds de roulement net global (FR)</strong> = ressources stables − emplois stables.</li>
  </ul>
  <p>Lecture : le FR est la <strong>part des ressources longues qui reste disponible pour financer le cycle d’exploitation</strong> une fois les immobilisations payées.</p>
  <ul>
    <li>FR &gt; 0 : les emplois stables sont couverts, et une partie du cycle aussi. Sain dans son principe.</li>
    <li>FR = 0 : les ressources longues financent exactement les immobilisations ; tout le cycle repose sur du court terme.</li>
    <li>FR &lt; 0 : des <strong>immobilisations sont financées par des dettes à court terme</strong>. Déséquilibre structurel, quel que soit le résultat de l’année.</li>
  </ul>

  <h2>3. Le besoin en fonds de roulement : le décalage du cycle</h2>
  <p>Le cycle d’exploitation (acheter, stocker, produire, vendre, encaisser) se déroule <strong>avant</strong> que les clients paient, alors que les fournisseurs sont souvent réglés plus tôt. Ce décalage crée un besoin de financement.</p>
  <pre class="codeblock"><code class="lang-text">BFR = actif circulant d'exploitation - passif circulant d'exploitation
    = (stocks + créances clients + autres créances)
    - (dettes fournisseurs + dettes fiscales et sociales + autres dettes)

Version courte, celle qu'on écrit en copie :
BFR = stocks + créances clients - dettes fournisseurs</code></pre>
  <ul>
    <li><strong>BFR &gt; 0</strong> : il faut financer stocks et créances. Industrie, BTP, conseil facturé à 60 jours.</li>
    <li><strong>BFR &lt; 0</strong> : le cycle <em>génère</em> de la trésorerie. Grande distribution (stocks payés après la vente), abonnements et acomptes encaissés d’avance, éditeur de logiciel en SaaS.</li>
    <li><strong>BFR en jours de chiffre d’affaires</strong> = (BFR / CA HT) × 360. Et par construction : BFR en jours ≈ délai de stockage + délai clients − délai fournisseurs.</li>
  </ul>
  <p>C’est le seul des trois indicateurs vraiment pilotable au quotidien : chaque jour gagné sur le délai client ou sur la rotation des stocks réduit mécaniquement le besoin.</p>

  <h2>4. La trésorerie nette : le résultat des deux</h2>
  <pre class="codeblock"><code class="lang-text">Trésorerie nette (TN) = FR - BFR
Contrôle comptable     = trésorerie actif - trésorerie passif (concours bancaires)</code></pre>
  <p>Les deux calculs donnent <strong>toujours le même résultat</strong>. Si un écart apparaît, il y a une erreur de calcul : c’est le meilleur moyen de vérifier une copie avant de rendre.</p>
  <table class="tbl">
    <caption>Les trois situations à savoir commenter</caption>
    <thead><tr><th>Situation</th><th>Interprétation</th></tr></thead>
    <tbody>
      <tr><td>TN &gt; 0</td><td>Marge de sécurité. L’entreprise absorbe un retard de paiement ou un surstock sans passer en découvert.</td></tr>
      <tr><td>TN ≈ 0</td><td>Équilibre au plus juste : aucun coussin, la moindre tension se transforme en découvert.</td></tr>
      <tr><td>TN &lt; 0</td><td>Le BFR dépasse le FR : le cycle est financé par des concours bancaires. Dépendance à la banque, coût financier, rupture possible si le crédit est retiré. Ce n’est pas synonyme de faillite : c’est un signal de fragilité, parfois saisonnier.</td></tr>
    </tbody>
  </table>

  <h2>5. Un bilan chiffré, de bout en bout</h2>
  <table class="tbl">
    <caption>Bilan au 31/12/N, en euros</caption>
    <thead><tr><th>Actif</th><th>Montant</th><th>Passif</th><th>Montant</th></tr></thead>
    <tbody>
      <tr><td>Actif immobilisé net</td><td>300 000</td><td>Capital, réserves, résultat</td><td>220 000</td></tr>
      <tr><td>Stocks</td><td>80 000</td><td>Amortissements et provisions</td><td>50 000</td></tr>
      <tr><td>Créances clients</td><td>120 000</td><td>Emprunt à plus d’un an</td><td>100 000</td></tr>
      <tr><td>Trésorerie actif</td><td>15 000</td><td>Dettes fournisseurs</td><td>105 000</td></tr>
      <tr><td></td><td></td><td>Dettes fiscales et sociales</td><td>30 000</td></tr>
      <tr><td></td><td></td><td>Concours bancaires courants</td><td>10 000</td></tr>
      <tr><td><strong>Total</strong></td><td><strong>515 000</strong></td><td><strong>Total</strong></td><td><strong>515 000</strong></td></tr>
    </tbody>
  </table>
  <ol>
    <li><strong>Capitaux permanents</strong> = 220 000 + 50 000 + 100 000 = <strong>370 000</strong>.</li>
    <li><strong>FR</strong> = 370 000 − 300 000 = <strong>70 000</strong>.</li>
    <li><strong>BFR</strong> = (80 000 + 120 000) − (105 000 + 30 000) = <strong>65 000</strong>.</li>
    <li><strong>TN</strong> = 70 000 − 65 000 = <strong>5 000</strong>. Contrôle : 15 000 − 10 000 = 5 000. ✔</li>
    <li><strong>BFR en jours</strong> : CA HT de 900 000, donc (65 000 / 900 000) × 360 = <strong>26 jours</strong> de chiffre d’affaires.</li>
    <li><strong>Autonomie financière</strong> = 220 000 / 515 000 = <strong>42,7 %</strong>. <strong>Endettement</strong> = 100 000 / 220 000 = <strong>45,5 %</strong>. <strong>Liquidité générale</strong> = 215 000 / 145 000 = <strong>1,48</strong>.</li>
  </ol>
  <div class="callout callout--key">
    <span class="callout__label">Le commentaire qui rapporte les points</span>
    <p>« L’équilibre est respecté au 31/12 : les ressources stables couvrent les emplois stables et le besoin du cycle, avec une trésorerie nette positive de 5 000 €. Mais cette marge représente environ deux jours de chiffre d’affaires : elle est quasi inexistante. Dix jours de délai client supplémentaires représenteraient 30 000 € de créances de plus, porteraient le BFR à 95 000 € et la trésorerie à −25 000 €, donc en découvert. La structure est saine, la gestion du cycle est fragile. »</p>
  </div>

  <h2>6. Les ratios et les délais à savoir calculer</h2>
  <table class="tbl">
    <caption>Formules et lecture</caption>
    <thead><tr><th>Indicateur</th><th>Formule</th><th>Lecture</th></tr></thead>
    <tbody>
      <tr><td>Autonomie financière</td><td>capitaux propres / total du bilan</td><td>Part du patrimoine financée sur fonds propres. Sous 30 %, la dépendance aux financements externes est forte.</td></tr>
      <tr><td>Endettement (levier)</td><td>dettes financières / capitaux propres</td><td>Au-delà de 1, l’endettement dépasse les fonds propres : capacité de remboursement à surveiller.</td></tr>
      <tr><td>Liquidité générale</td><td>(actif circulant + trésorerie actif) / (passif circulant + concours bancaires)</td><td>Capacité à payer le court terme avec ce qui est réalisable à court terme. Sous 1, tension.</td></tr>
      <tr><td>Délai clients (DSO)</td><td>(créances clients TTC / CA TTC) × 360</td><td>Nombre de jours de CA que représentent les créances. À comparer au délai contractuel.</td></tr>
      <tr><td>Délai de stockage (DIO)</td><td>(stocks / achats HT) × 360</td><td>Durée moyenne d’immobilisation des stocks.</td></tr>
      <tr><td>Délai fournisseurs (DPO)</td><td>(dettes fournisseurs TTC / achats TTC) × 360</td><td>Crédit obtenu des fournisseurs. Un DPO long améliore la trésorerie mais peut masquer une dépendance.</td></tr>
      <tr><td>BFR en jours</td><td>(BFR / CA HT) × 360</td><td>Équivalent du besoin exprimé en jours d’activité : lisible et comparable d’une année sur l’autre.</td></tr>
    </tbody>
  </table>
  <div class="callout callout--warn">
    <span class="callout__label">HT ou TTC</span>
    <p>Les créances clients et les dettes fournisseurs du bilan sont <strong>TTC</strong> (TVA incluse), le chiffre d’affaires du compte de résultat est <strong>HT</strong>. Mélanger les deux fausse le délai de 20 % : dans un sujet, écris la conversion, même mentalement (CA TTC = CA HT × 1,20).</p>
  </div>

  <h2>7. Rétablir l’équilibre : trois leviers, trois horizons</h2>
  <ul>
    <li><strong>Agir sur le FR (structure, plusieurs mois)</strong> : augmentation de capital, apport en compte courant d’associé, emprunt à long terme, autofinancement par le résultat, cession d’actifs non stratégiques, subventions, crédit-bail (usage plutôt que propriété).</li>
    <li><strong>Agir sur le BFR (exploitation, quelques semaines)</strong> : réduire les stocks (rotation, déstockage), réduire le délai client (relances, prélèvement SEPA, escompte pour paiement anticipé, acomptes à la commande), négocier le délai fournisseurs, affacturage (efficace mais coûteux et partiellement transféré au client).</li>
    <li><strong>Agir sur la TN (court terme, immédiat)</strong> : découvert autorisé négocié, ligne de crédit, escompte d’effets. Cela <strong>traite le symptôme</strong> et gagne du temps, jamais la cause.</li>
  </ul>
  <p>En copie, hiérarchise : le découvert est une solution de continuité, pas une solution d’équilibre.</p>

  <h2>8. Les huit pièges qui coûtent des points</h2>
  <ol>
    <li><strong>FR ≠ trésorerie disponible.</strong> Le FR mesure une ressource durable, pas de l’argent en banque.</li>
    <li><strong>Amortissement ≠ nouvelle ressource encaissée.</strong> C’est l’étalement comptable d’une dépense déjà faite ; il améliore la capacité d’autofinancement, pas la trésorerie du jour.</li>
    <li><strong>Résultat bénéficiaire ≠ trésorerie positive.</strong> Un client qui ne paie pas laisse un produit comptabilisé et zéro euro en banque.</li>
    <li><strong>BFR négatif ≠ automatiquement bon.</strong> S’il vient d’un DPO de 120 jours, c’est de la dépendance aux fournisseurs.</li>
    <li><strong>Un emprunt long finance des emplois stables</strong>, pas un stock. Financer un surstock par un emprunt de 7 ans, c’est payer des intérêts longtemps pour un besoin saisonnier.</li>
    <li><strong>TN négative n’est pas une faillite.</strong> Elle indique un financement du cycle par la banque, parfois saisonnier.</li>
    <li><strong>Ne jamais additionner capitaux propres et dettes financières</strong> en oubliant amortissements et provisions quand la présentation les place au passif.</li>
    <li><strong>Une photo, pas une tendance.</strong> Un bilan au 31/12 peut masquer une tension de trésorerie de septembre : sans variation annuelle ni saisonnalité, la conclusion reste prudente.</li>
  </ol>

  <h2>9. Le lien avec les métiers SIO</h2>
  <ul>
    <li>Un <strong>logiciel développé en interne</strong> est une immobilisation incorporelle, amortie sur 3 à 5 ans : il pèse sur le FR avant de produire des économies.</li>
    <li>Un <strong>abonnement SaaS</strong> est une charge de l’exercice : pas de FR mobilisé, mais une dépendance contractuelle et un coût récurrent.</li>
    <li>Un projet <strong>ERP ou infrastructure</strong> se juge donc sur deux plans : le coût total de possession et l’effet sur l’équilibre financier (FR si internalisé, BFR si facturation décalée).</li>
  </ul>
  `,
  cards: [
    { id: "f1", q: "Que représentent l’actif et le passif du bilan ?", a: "L’<strong>actif</strong> recense les emplois (à quoi l’argent a servi : immobilisations, stocks, créances, trésorerie). Le <strong>passif</strong> recense les ressources (d’où vient l’argent : capitaux propres, amortissements et provisions, dettes financières, dettes d’exploitation)." },
    { id: "f2", q: "Total actif = total passif : est-ce le signe d’une bonne santé financière ?", a: "Non. L’égalité est une <strong>identité comptable</strong>, vraie par construction. Un bilan équilibré peut cacher un FR négatif, un BFR incontrôlé et une trésorerie en découvert." },
    { id: "f3", q: "Qu’est-ce qu’un emploi stable ?", a: "L’<strong>actif immobilisé net</strong> : immobilisations incorporelles (brevet, logiciel, fonds commercial), corporelles (terrain, construction, matériel) et financières. Ce qui est engagé durablement, pas pour un cycle d’exploitation." },
    { id: "f4", q: "Que contiennent les capitaux permanents ?", a: "Capitaux propres + amortissements et dépréciations + provisions + <strong>dettes financières à plus d’un an</strong>. Ce sont les ressources stables." },
    { id: "f5", q: "Formule du fonds de roulement net global ?", a: "<strong>FR = ressources stables − emplois stables</strong>, soit capitaux permanents − actif immobilisé net. Il mesure la part des ressources longues disponible pour financer le cycle." },
    { id: "f6", q: "Que signifie un FR négatif ?", a: "Les <strong>immobilisations sont financées par des dettes à court terme</strong> : déséquilibre structurel. L’entreprise rembourse du long terme avec du court terme, ce qui la rend dépendante de ses banques, indépendamment de son résultat." },
    { id: "f7", q: "Formule du BFR ?", a: "<strong>BFR = actif circulant d’exploitation − passif circulant d’exploitation</strong>, soit (stocks + créances clients + autres créances) − (dettes fournisseurs + dettes fiscales et sociales + autres dettes). Version courte : stocks + créances clients − dettes fournisseurs." },
    { id: "f8", q: "Un BFR négatif est-il toujours une bonne nouvelle ?", a: "Non. Il peut venir d’encaissements d’avance (SaaS, grande distribution : excellent) ou d’un <strong>délai fournisseurs anormalement long</strong>, qui traduit une dépendance et un risque de rupture d’approvisionnement." },
    { id: "f9", q: "Formule de la trésorerie nette, et son contrôle ?", a: "<strong>TN = FR − BFR</strong>. Contrôle comptable : <strong>trésorerie actif − trésorerie passif</strong> (concours bancaires). Les deux résultats doivent être identiques ; sinon, erreur de calcul." },
    { id: "f10", q: "Une TN négative signifie-t-elle la faillite ?", a: "Non. Elle signifie que le BFR dépasse le FR : le cycle est financé par des <strong>concours bancaires</strong>. C’est un signal de fragilité et de dépendance, parfois seulement saisonnier." },
    { id: "f11", q: "Un résultat bénéficiaire garantit-il une trésorerie positive ?", a: "Non. Les produits comptabilisés ne sont pas tous encaissés (créances clients), les stocks immobilisent du cash et les investissements ou remboursements d’emprunt sortent sans passer par le résultat." },
    { id: "f12", q: "Les amortissements sont-ils une ressource nouvelle ?", a: "Non : ils étalent comptablement une dépense déjà engagée. Ils figurent au passif comme ressource stable et améliorent la <strong>capacité d’autofinancement</strong>, mais n’apportent aucun euro en banque le jour du calcul." },
    { id: "f13", q: "Comment financer un BFR durablement ?", a: "Par des <strong>ressources stables</strong> (fonds propres, emprunt long) ou en le réduisant. Le découvert ne finance que la pointe saisonnière : l’utiliser pour un besoin permanent revient à financer du long terme avec du court terme." },
    { id: "f14", q: "Effet d’un allongement du délai client sur FR, BFR et TN ?", a: "Les créances augmentent : <strong>BFR augmente</strong>, <strong>TN diminue</strong> du même montant, le <strong>FR est inchangé</strong> (il ne dépend pas du cycle)." },
    { id: "f15", q: "FR = 120 000 et BFR = 150 000 : conclusion ?", a: "TN = <strong>−30 000</strong> : le cycle est financé à hauteur de 30 000 € par des concours bancaires. Il faut soit augmenter le FR (ressources stables), soit réduire le BFR de 30 000 € (stocks, délai client)." },
    { id: "f16", q: "Deux ratios de structure à citer systématiquement ?", a: "<strong>Autonomie financière</strong> = capitaux propres / total du bilan (sous 30 %, dépendance forte) et <strong>endettement</strong> = dettes financières / capitaux propres (au-delà de 1, capacité de remboursement à surveiller)." },
    { id: "f17", q: "Que mesure la liquidité générale, et quel seuil ?", a: "(actif circulant + trésorerie) / (passif circulant + concours bancaires). <strong>Au-dessous de 1</strong>, l’entreprise ne peut pas honorer son court terme avec ce qu’elle réalisera à court terme." },
    { id: "f18", q: "Comment exprime-t-on le BFR en jours, et à quoi ça sert ?", a: "(BFR / CA HT) × 360. Cela donne un besoin en jours d’activité, comparable d’un exercice à l’autre et indépendant de la taille de l’entreprise. Ordre de grandeur : BFR en jours ≈ délai de stockage + délai clients − délai fournisseurs." },
    { id: "f19", q: "Deux erreurs de financement classiques à relever dans un sujet ?", a: "Financer un <strong>stock saisonnier</strong> par un emprunt à long terme (coût inutile) et financer une <strong>immobilisation</strong> par du découvert (déséquilibre structurel). Le principe : les emplois durables se financent par des ressources durables." },
    { id: "f20", q: "Pourquoi le bilan seul ne suffit-il pas à conclure ?", a: "C’est une <strong>photographie à une date</strong>. Sans l’exercice précédent ni l’information sur la saisonnalité, on ne distingue pas une tension ponctuelle d’une dégradation durable." }
  ],
  ateliers: [
    {
      id: "at-fin-calcul",
      title: "Calculer FR, BFR et trésorerie nette",
      lang: "text",
      prompt: `<p><strong>Bilan au 31/12/N (en euros).</strong></p>
      <ul>
        <li>Actif immobilisé net : 300 000</li>
        <li>Stocks : 80 000 · Créances clients : 120 000 · Trésorerie actif : 15 000</li>
        <li>Capitaux propres : 220 000 · Amortissements et provisions : 50 000 · Emprunt à plus d’un an : 100 000</li>
        <li>Dettes fournisseurs : 105 000 · Dettes fiscales et sociales : 30 000 · Concours bancaires : 10 000</li>
        <li>Chiffre d’affaires HT de l’exercice : 900 000</li>
      </ul>
      <p>Calcule les <strong>capitaux permanents</strong>, le <strong>FR</strong>, le <strong>BFR</strong>, la <strong>TN</strong> (avec son contrôle), le <strong>BFR en jours de CA</strong>, puis rédige un <strong>diagnostic de quatre lignes</strong> et l’effet de 10 jours de délai client supplémentaires.</p>`,
      starter: `1. Capitaux permanents
220 000 + 50 000 + 100 000 = ...

2. FR
...
`,
      checks: [
        { label: "Capitaux permanents = 370 000", test: /370\s?000/ },
        { label: "FR = 70 000", test: /70\s?000/ },
        { label: "BFR = 65 000", test: /65\s?000/ },
        { label: "TN = 5 000 avec le contrôle (15 000 - 10 000)", test: /5\s?000/ },
        { label: "BFR en jours calculé (26 jours)", test: /2[56]\s?jours|26\s?j/i },
        { label: "Effet des 10 jours clients : 25 000 de créances en plus, TN à -20 000", test: /-?\s?2[05]\s?000/ },
        { label: "Le diagnostic conclut sur une marge faible / fragile", test: /fragile|faible|inexistant|tendue/i }
      ],
      model: `1. Capitaux permanents
220 000 + 50 000 + 100 000 = 370 000

2. FR
370 000 - 300 000 = 70 000

3. BFR
(80 000 + 120 000)
- (105 000 + 30 000)
= 200 000 - 135 000 = 65 000

4. TN
FR - BFR = 70 000 - 65 000 = 5 000
Contrôle : 15 000 - 10 000 = 5 000 ✔

5. BFR en jours de CA
(65 000 / 900 000) x 360 = 26 jours

Diagnostic
- Ressources stables : 370 000.
  Elles couvrent les 300 000
  d'immobilisations et laissent
  70 000 pour le cycle :
  structure saine.
- Le cycle immobilise 65 000,
  soit 26 jours de CA, couvert
  par le FR.
- TN = 5 000, moins de deux
  jours de CA : marge quasi
  nulle.
- Saine mais tendue : tout
  allongement du délai client
  passe en découvert.

10 jours de client en plus
10 jours de CA = 25 000
BFR = 65 000 + 25 000 = 90 000
TN = 70 000 - 90 000 = -20 000
Trésorerie négative pour dix
jours de retard d'encaissement.`
    },
    {
      id: "at-fin-leviers",
      title: "Diagnostiquer et proposer trois leviers",
      lang: "text",
      prompt: `<p><strong>Situation.</strong> Une PME de services informatiques (18 salariés) présente au 31/12 : FR = 40 000 €, BFR = 95 000 €, TN = −55 000 €. Le délai client moyen est de <strong>72 jours</strong> alors que le contrat prévoit 30 jours. Les stocks sont faibles (matériel revendu), les dettes fournisseurs sont réglées à 30 jours. Le résultat de l’exercice est bénéficiaire de 45 000 €.</p>
      <p>Rédige en une dizaine de lignes : (1) le <strong>diagnostic</strong> en mobilisant FR, BFR, TN ; (2) le lien entre le résultat bénéficiaire et la trésorerie négative ; (3) <strong>trois leviers</strong> classés par horizon, avec leur effet attendu et leur limite.</p>`,
      starter: `1. Diagnostic
FR = 40 000, BFR = 95 000, donc TN = ...
`,
      checks: [
        { label: "Les trois indicateurs sont cités et reliés (FR, BFR, TN)", test: /FR|fonds de roulement/i },
        { label: "Le BFR est identifié comme excessif du fait du délai client", test: /client|créance|DSO|72/i },
        { label: "Le décalage produit/encaissement explique le bénéfice sans cash", test: /encaiss|bénéfice|résultat/i },
        { label: "Un levier sur le BFR est proposé (relances, escompte, acompte)", test: /relance|escompte|acompte|affacturage/i },
        { label: "Un levier sur le FR est proposé (capital, emprunt long, cession)", test: /capital|emprunt|cession|autofinancement/i },
        { label: "Le découvert est présenté comme provisoire, pas comme solution", test: /découvert|concours bancaire/i },
        { label: "Une limite ou un coût par levier est mentionné", test: /coût|limite|risque|dépendance/i }
      ],
      model: `1. Diagnostic
FR = 40 000
BFR = 95 000
TN = 40 000 - 95 000 = -55 000
Les ressources stables couvrent
les immobilisations et 40 000 du
cycle, mais le cycle en réclame
95 000 : 55 000 viennent de la
banque. BFR anormal pour une
société de services (stocks
faibles) : 72 jours de client au
lieu de 30 contractuels. Le
poste client est le coupable.

2. Bénéfice sans trésorerie
Résultat +45 000, mais +45 000
de créances dans l'année : le
produit est comptabilisé à la
facturation, pas à l'encaissement.
Un bénéfice est un fait comptable,
la trésorerie un fait de date.
Environ 42 jours de CA dorment
chez les clients.

3. Trois leviers
Court terme, 0 à 3 mois
Relances systématiques, escompte
1 à 2 % pour paiement à 10 jours,
blocage des prestations des
clients en retard.
Effet : -20 à -30 jours de DSO.
Limite : coût commercial de
l'escompte, dépend de la
solvabilité des clients.

Moyen terme, 3 à 12 mois
Acompte de 30 % à la commande et
facturation à l'avancement sur
les contrats de service.
Effet : BFR structurellement
plus faible.
Limite : acceptation du client,
exige un contrat solide.

Structure, au-delà de 12 mois
Emprunt long ou augmentation de
capital pour reconstituer le FR,
ou affacturage pour convertir les
créances en cash.
Effet : TN redevenue positive.
Limite : coût financier, dilution,
et l'affacturage traite le
symptôme, pas le délai client.

Le découvert de 55 000 n'est pas
un problème de banque mais de
politique commerciale : tant que
le délai client reste à 72 jours,
il réapparaîtra.`
    }
  ]
},

/* ============================== 07 ============================== */
{
  id: "07-redaction",
  num: "07",
  title: "Rédiger et qualifier",
  tag: "Méthode transversale",
  hot: true,
  intro: "L'épreuve demande des « réponses construites et argumentées ». Une réponse construite suit toujours la même chaîne, quelle que soit la discipline.",
  cours: `
  <h2>1. La chaîne en quatre temps (droit surtout)</h2>
  <pre class="codeblock"><code class="lang-text">1. FAITS        je qualifie la situation : contrat ? faute ? salarie ?
2. REGLE        je cite la regle applicable (article, convention, principe)
3. APPLICATION  je confronte les faits a la regle, element par element
4. CONCLUSION   je reponds precisement a la question posee</code></pre>
  <p>Exemple de qualification : « Le salarié est lié par un CDI ; le changement d'horaires demandé modifie une clause du contrat ; or la modification du contrat requiert l'accord du salarié ; le refus est donc légitime. » Quatre phrases, quatre points de barème.</p>

  <h2>2. Les mots de la qualification</h2>
  <ul>
    <li><strong>Qualifier</strong> = donner le nom juridique ou économique exact à une situation (contrat de vente, licenciement économique, abus de position dominante).</li>
    <li><strong>Caractériser</strong> = prouver que les conditions sont réunies (« les trois conditions du contrat sont réunies : consentement, capacité, objet certain »).</li>
    <li><strong>Argumenter</strong> = justifier par une règle, pas par une opinion.</li>
  </ul>

  <h2>3. Exploiter un document chiffré</h2>
  <ol>
    <li><strong>Source et date</strong> : « selon le document 2 (INSEE, 2026) ».</li>
    <li><strong>Unité et ordre de grandeur</strong> : milliards d'euros, pourcentage, indice base 100.</li>
    <li><strong>Évolution calculée</strong> : « le chiffre d'affaires passe de 2,4 à 3,1 M€, soit une hausse de 29 % ».</li>
    <li><strong>Interprétation</strong> : ce que ça signifie pour l'entreprise, pas seulement le chiffre.</li>
  </ol>
  <p>Ne jamais recopier un tableau. Le correcteur veut voir <strong>un calcul</strong> et <strong>une lecture</strong>.</p>

  <h2>4. Les calculs à savoir refaire</h2>
  <pre class="codeblock"><code class="lang-text">Marge commerciale       = ventes - cout d'achat des marchandises vendues
Taux de marge           = marge / cout d'achat (x100)
Taux de marque          = marge / prix de vente (x100)
Resultat                = produits - charges
Productivite            = production / nombre de salaries
Taux de variation       = (valeur finale - valeur initiale) / valeur initiale x100</code></pre>
  <p>Attention : chiffre d'affaires ≠ marge ≠ résultat. Cette confusion est comptée fausse même si le raisonnement est bon.</p>

  <h2>5. Les connecteurs qui structurent</h2>
  <pre class="codeblock"><code class="lang-text">D'abord / ensuite / enfin            pour ordonner
En effet / car                       pour justifier
Or / cependant / en revanche         pour opposer
Par consequent / donc                pour conclure
Autrement dit                        pour reformuler
Ainsi / a titre d'illustration       pour illustrer par le cas</code></pre>

  <h2>6. Les formulations qui coûtent</h2>
  <ul>
    <li>« Je pense que », « à mon avis », « selon moi » : l'épreuve demande une réponse argumentée, pas une opinion.</li>
    <li>« C'est illégal » sans dire <strong>pourquoi</strong> ni <strong>quel texte</strong>.</li>
    <li>Recopier le document sans le citer ni le commenter.</li>
    <li>Donner une solution sans avoir qualifié le problème.</li>
    <li>Répondre à côté parce que la question n'a pas été lue jusqu'au bout (elle contient souvent deux consignes).</li>
  </ul>

  <h2>7. Gestion du temps sur 4 heures</h2>
  <pre class="codeblock"><code class="lang-text">00-20   lecture des questions, reperage des disciplines, ordre de traitement
20-50   documents : notes, calculs, citations utiles
50-210  redaction, question par question, en commencant par la mieux maitrisee
210-230 relecture : chaque question a-t-elle une reponse complete ?</code></pre>
  `,
  cards: [
    { id: "t7a", q: "Quelles sont les quatre étapes d'une réponse juridique ?", a: "<strong>Faits</strong> (qualification) → <strong>règle de droit</strong> → <strong>application</strong> aux faits → <strong>conclusion</strong>. Chaque étape rapporte des points séparément." },
    { id: "t7b", q: "Que signifie « qualifier » une situation ?", a: "Lui donner son nom juridique ou économique exact : contrat de prestation de service numérique, licenciement sans cause réelle et sérieuse, abus de position dominante. Sans qualification, la règle ne peut pas être choisie." },
    { id: "t7c", q: "Différence entre marge et résultat ?", a: "La <strong>marge</strong> mesure l'écart entre ventes et coût d'achat. Le <strong>résultat</strong> est la différence entre tous les produits et toutes les charges. Une entreprise peut avoir une marge et un résultat négatif." },
    { id: "t7d", q: "Comment commenter un tableau chiffré ?", a: "Source et date, unité, <strong>calcul d'évolution</strong>, puis interprétation pour l'entreprise. On ne recopie jamais le tableau : on produit un calcul et une lecture." },
    { id: "t7e", q: "Formule du taux de variation ?", a: "(valeur finale − valeur initiale) / valeur initiale × 100. Exemple : de 2,4 à 3,1 M€ = +29 %." },
    { id: "t7f", q: "Pourquoi éviter « je pense que » ?", a: "L'épreuve évalue une <strong>réponse argumentée</strong>, pas une opinion. On remplace par une règle, un calcul ou une comparaison : « en effet », « or », « par conséquent »." },
    { id: "t7g", q: "Une question contient souvent deux consignes : exemple ?", a: "« Identifiez le risque et proposez une mesure » : il faut <strong>nommer le risque</strong> puis <strong>proposer</strong>. Répondre à une seule des deux divise la note par deux." },
    { id: "t7h", q: "Que faire des documents en début d'épreuve ?", a: "Lire <strong>les questions d'abord</strong>, puis les documents en notant uniquement ce qui répond aux questions. Cela évite de lire dix pages pour rien." },
    { id: "t7i", q: "Trois connecteurs pour opposer deux idées ?", a: "<em>Or</em>, <em>cependant</em>, <em>en revanche</em>. Pour conclure : <em>par conséquent</em>, <em>donc</em>." }
  ],
  ateliers: [
    {
      id: "at-qualification",
      title: "Rédige une réponse en quatre temps",
      lang: "text",
      prompt: `<p>Question : une entreprise de 12 salariés confie la maintenance de son site à un prestataire indépendant. Celui-ci travaille dans les locaux, reçoit ses missions par le directeur, pointe ses heures et assiste aux réunions hebdomadaires. Il facture 400 € par jour.</p>
      <p>Rédige une réponse construite : qualifie la relation, indique la règle applicable, applique-la aux faits, puis conclus sur les conséquences pour l'entreprise.</p>`,
      starter: `Faits : `,
      model: `Faits : le prestataire travaille dans les locaux de l'entreprise, reçoit ses missions du directeur, pointe ses heures et participe aux réunions hebdomadaires. Ces éléments caractérisent un lien de subordination : ordres, contrôle du temps de travail, intégration à l'organisation.

Règle : le contrat de travail se distingue de la prestation de service par l'existence d'un lien de subordination, quel que soit l'intitulé du contrat. La qualification dépend des conditions réelles d'exécution, appréciées par le juge.

Application : ici, les trois marqueurs du lien de subordination sont réunis : instructions données par le dirigeant, contrôle des horaires par le pointage, insertion dans le collectif de travail. La facturation journalière ne suffit pas à écarter la requalification.

Conclusion : le contrat risque d'être requalifié en contrat de travail. L'entreprise devra régulariser les cotisations sociales, accorder les droits liés au statut de salarié et s'expose à une action devant les prud'hommes. Une requalification vaut aussi pour les autres prestataires placés dans la même situation.`,
      checks: [
        { label: "Lien de subordination identifié", test: /lien de subordination/i },
        { label: "Indices relevés (ordres, pointage, réunions)", test: /(pointage|pointe|ordres|r[ée]unions)/i },
        { label: "Règle : qualification selon les faits, pas l'intitulé", test: /(intitul[ée]|conditions r[ée]elles|qualification)/i },
        { label: "Application au cas", test: /application/i },
        { label: "Conséquence : requalification en CDI", test: /requalif/i },
        { label: "Conséquence : cotisations / prud'hommes", test: /(cotisations|prud'?hommes)/i }
      ]
    }
  ]
},

/* ============================== 08 ============================== */
{
  id: "08-pieges",
  num: "08",
  title: "Les 12 pièges de l'épreuve",
  tag: "Relecture finale",
  hot: true,
  intro: "Ce sont les erreurs qui coûtent réellement des points sur une copie de CEJMI. Aucune ne demande d'apprendre une notion supplémentaire.",
  cours: `
  <h2>La liste</h2>
  <ol>
    <li><strong>Confondre chiffre d'affaires, marge et résultat.</strong> Le CA n'est pas un bénéfice.</li>
    <li><strong>Conclure sans qualifier.</strong> « C'est illégal » sans nommer la règle ni la situation ne rapporte rien.</li>
    <li><strong>Donner un avis personnel</strong> au lieu d'argumenter. On attend une démonstration, pas un ressenti.</li>
    <li><strong>Recopier le document</strong> sans le citer ni le commenter.</li>
    <li><strong>Ne pas répondre aux deux consignes</strong> d'une même question (identifier ET proposer).</li>
    <li><strong>Confondre SA et SARL</strong> sur la responsabilité : SA et SARL sont toutes deux à responsabilité limitée ; la différence est le mode de direction et le capital minimal de la SA (37 000 €).</li>
    <li><strong>Confondre politique conjoncturelle et structurelle.</strong> Conjoncturelle = court terme (budgétaire, monétaire) ; structurelle = long terme (formation, infrastructure, concurrence).</li>
    <li><strong>Oublier que le RGPD impose une obligation de moyens renforcée</strong>, pas un résultat absolu : on demande des mesures adaptées au risque, documentées.</li>
    <li><strong>Confondre externalisation et sous-traitance de données</strong> : dans les deux cas, l'entreprise reste responsable du traitement au sens du RGPD.</li>
    <li><strong>Affirmer que le CDD peut être rompu librement.</strong> Il suit des règles strictes ; une rupture anticipée hors cas prévus ouvre droit à des dommages et intérêts.</li>
    <li><strong>Utiliser « croissance » et « développement » comme synonymes.</strong> La croissance est quantitative (PIB, CA) ; le développement est qualitatif (bien-être, capacités, durabilité).</li>
    <li><strong>Terminer sans réponse explicite</strong> à la question posée. Une conclusion doit trancher, pas résumer.</li>
  </ol>

  <h2>Checklist de relecture (10 minutes)</h2>
  <pre class="codeblock"><code class="lang-text">[ ] chaque question a une reponse identifiable, meme courte
[ ] chaque reponse a une regle ou un chiffre, pas seulement une opinion
[ ] les deux consignes de chaque question sont traitees
[ ] les calculs sont poses et verifiables
[ ] les documents sont cites (source + date) quand ils sont utilises
[ ] aucune confusion CA / marge / resultat
[ ] les termes juridiques sont exacts (qualification, sanction, consequence)
[ ] la conclusion repond a la question, sans digression</code></pre>

  <div class="callout callout--key">
    <span class="callout__label">Stratégie</span>
    <p>Sur 4 heures, mieux vaut traiter <strong>toutes</strong> les questions avec des réponses courtes et justes que trois questions parfaites et deux laissées vides. Une question vide vaut zéro point, une réponse incomplète vaut souvent la moitié des points.</p>
  </div>
  `,
  cards: [
    { id: "t8a", q: "Piège 1 : le chiffre d'affaires est-il un bénéfice ?", a: "<strong>Non.</strong> C'est le total des ventes. Le bénéfice est le résultat, après déduction de toutes les charges." },
    { id: "t8b", q: "Piège 2 : que manque-t-il à « c'est illégal » ?", a: "La <strong>qualification</strong> de la situation et la <strong>règle</strong> appliquée. Sans les deux, aucune démonstration n'est possible et le point n'est pas attribué." },
    { id: "t8c", q: "Piège 3 : différence entre SA et SARL ?", a: "Les deux sont à <strong>responsabilité limitée</strong>. La SA exige un capital minimal de <strong>37 000 €</strong> et fonctionne avec un conseil d'administration ou un directoire ; la SARL n'a pas de capital minimum et est dirigée par un gérant." },
    { id: "t8d", q: "Piège 4 : politique conjoncturelle ou structurelle ?", a: "<strong>Conjoncturelle</strong> : court terme, action sur la demande (budgétaire, monétaire). <strong>Structurelle</strong> : long terme, action sur l'offre et les capacités (formation, infrastructures, concurrence)." },
    { id: "t8e", q: "Piège 5 : qui est responsable du traitement RGPD quand on externalise ?", a: "L'<strong>entreprise cliente reste responsable du traitement</strong> ; le prestataire devient sous-traitant, lié par un contrat qui encadre la finalité, la sécurité et la restitution des données." },
    { id: "t8f", q: "Piège 6 : croissance et développement, même chose ?", a: "<strong>Non.</strong> La croissance est quantitative (PIB, chiffre d'affaires) ; le développement est qualitatif (bien-être, capacités, durabilité). Une croissance peut aller sans développement." },
    { id: "t8g", q: "Piège 7 : que doit contenir une conclusion ?", a: "Une <strong>réponse explicite</strong> à la question posée, pas un résumé du développement. Si la question demande « l'entreprise peut-elle… », la conclusion commence par « oui » ou « non », puis justifie." },
    { id: "t8h", q: "Piège 8 : comment traiter deux consignes en une question ?", a: "En deux temps explicites : « 1) le risque est… 2) la mesure proposée est… ». Une question double traitée à moitié divise la note." },
    { id: "t8i", q: "Piège 9 : le RGPD impose-t-il un résultat ?", a: "Non, une <strong>obligation de moyens renforcée</strong> : des mesures techniques et organisationnelles adaptées au risque, documentées. L'absence de violation ne prouve pas la conformité, et l'inverse est vrai aussi." },
    { id: "t8j", q: "Stratégie générale sur 4 heures ?", a: "Traiter <strong>toutes</strong> les questions avec des réponses courtes et justes, plutôt que trois parfaites et deux vides. Une question vide vaut zéro." }
  ],
  ateliers: []
}

];

/* Récap express par thème : une fiche courte par section, pour relire sans couper l'essentiel.
   Le détail complet reste dans chaque section et dans la lecture continue (#/lecture). */
const RECAP = [
  {
    id: "00-methode",
    num: "00",
    title: "Méthode de l’épreuve",
    tldr: "La note se gagne autant sur la structure que sur le fond.",
    points: [
      "<strong>Lire les questions avant les annexes</strong> : elles disent quoi chercher. Classer chaque question en éco, droit ou management.",
      "Structure en quatre temps : <strong>qualification → règle → application aux faits cités → conclusion</strong>. La règle s’énonce avant d’être appliquée.",
      "Une idée = une ligne numérotée. Une question à 4 points appelle environ quatre idées distinctes.",
      "Budget : 15 min de repérage, 3 h de rédaction, 10 min de relecture ciblée. Jamais de question vide : trois lignes valent mieux que rien.",
      "Le correcteur est professeur de CEJM, pas informaticien : il note la rigueur de la démonstration, pas la pertinence technique de la solution."
    ],
    pieges: ["Paraphraser le document", "Confondre chiffre d’affaires et bénéfice", "Oublier la conclusion juridique"]
  },
  {
    id: "01-integration",
    num: "01",
    title: "Intégration de l’entreprise dans son environnement",
    tldr: "Qui entoure l’entreprise, comment elle échange et comment elle contracte.",
    points: [
      "<strong>Agents économiques</strong> (ménages, entreprises, administrations, institutions financières, reste du monde) reliés par des flux réels et monétaires.",
      "<strong>Marché</strong> : offre, demande, prix d’équilibre. Concurrence pure et parfaite = cinq conditions ; sinon monopole, oligopole, concurrence monopolistique.",
      "<strong>Barrières à l’entrée</strong> et <strong>asymétrie d’information</strong> : sélection adverse (avant contrat) et aléa moral (après).",
      "<strong>Externalités</strong> : effet sur un tiers hors marché, positif ou négatif. Internalisation par taxe, subvention, réglementation ou marché de droits.",
      "Financement : <strong>banques</strong> (crédit, création monétaire) et <strong>marché financier</strong> (actions, obligations).",
      "<strong>Contrat</strong> : formation (offre et acceptation), validité (consentement, capacité, contenu licite et certain), effets (force obligatoire, effet relatif).",
      "<strong>Finalités, parties prenantes, performance</strong> : économique, financière, sociale et sociétale ; la RSE traduit cet élargissement."
    ],
    pieges: ["Externalité ≠ coût supporté par l’entreprise", "Chiffre d’affaires ≠ bénéfice", "Contrat valable ≠ contrat exécuté"]
  },
  {
    id: "02-regulation",
    num: "02",
    title: "Régulation de l’activité économique",
    tldr: "L’État corrige, redistribue, régule, et le droit encadre la concurrence.",
    points: [
      "<strong>Trois rôles de l’État</strong> : allocation des ressources, redistribution, régulation (la stabilisation s’y ajoute).",
      "<strong>Déséquilibres</strong> : inflation, chômage, déficit extérieur, dette publique. Chacun a ses indicateurs et ses causes distinctes.",
      "<strong>Politiques conjoncturelles</strong> (budgétaire, monétaire, horizon 1-3 ans) contre <strong>politiques structurelles</strong> (offre, compétitivité, horizon long).",
      "<strong>Autorités administratives indépendantes</strong> : elles régulent sans tutelle gouvernementale (concurrence, marchés financiers, données).",
      "<strong>Droit de la concurrence</strong> : ententes, abus de position dominante, contrôle des concentrations.",
      "<strong>Propriété industrielle</strong> : brevet (20 ans, nouveauté, activité inventive, application industrielle) et marque (10 ans renouvelables).",
      "<strong>PESTEL</strong> pour balayer le macro-environnement : politique, économique, socioculturel, technologique, environnemental, légal."
    ],
    pieges: ["Politique de relance ≠ politique de rigueur", "Brevet et marque ne protègent pas la même chose", "Un taux qui baisse de 5 % à 4 % perd 1 point, pas 20 %"]
  },
  {
    id: "03-organisation",
    num: "03",
    title: "Organisation de l’activité de l’entreprise",
    tldr: "Produire au meilleur coût, décider de faire ou faire-faire, choisir sa structure juridique.",
    points: [
      "<strong>Facteurs de production</strong> : travail, capital, matières premières, connaissances. <strong>Productivité</strong> = production / facteur employé, toujours avec son unité.",
      "<strong>Charges fixes / variables</strong>, marge sur coût variable, <strong>seuil de rentabilité</strong> = charges fixes / taux de MSCV. <strong>Point mort</strong> = seuil / CA × 12.",
      "<strong>Chaîne de valeur</strong> (Porter) : activités principales et activités de soutien ; elle localise où se crée la marge.",
      "<strong>Faire ou faire-faire</strong> : externalisation (activité entière, durable) contre sous-traitance (production ponctuelle). Coûts de transaction, dépendance, perte de savoir-faire.",
      "<strong>Structures juridiques</strong> : EI (responsabilité illimitée), SARL (limitée aux apports), SAS (capital libre, statuts souples), SA (37 000 € minimum).",
      "<strong>Responsabilité</strong> : civile contractuelle, civile extracontractuelle (faute, dommage, lien de causalité), pénale (personnelle).",
      "Organisation des ressources : structure fonctionnelle, divisionnelle, matricielle, par projet."
    ],
    pieges: ["Production ≠ productivité", "Seuil de rentabilité ≠ point mort", "Choisir une structure sur le seul critère fiscal"]
  },
  {
    id: "04-numerique",
    num: "04",
    title: "Impact du numérique sur la vie de l’entreprise",
    tldr: "Plateformes, données, normes : le numérique change les marchés et crée des obligations.",
    points: [
      "<strong>Plateformes</strong> : effets de réseau directs et croisés, <strong>externalités de réseau</strong>, marchés bifaces, logique de winner-takes-all.",
      "<strong>Économie collaborative</strong> : mise en relation d’offre et de demande entre particuliers, avec la question du statut des travailleurs.",
      "<strong>Normes et standards</strong> : interopérabilité et confiance d’un côté, verrouillage et coûts de sortie de l’autre.",
      "<strong>RGPD</strong> : principes de finalité, minimisation, durée limitée, sécurité ; droits d’accès, de rectification, d’effacement, de portabilité ; notification d’une violation sous 72 h.",
      "<strong>Actifs immatériels</strong> : brevet, marque, secret des affaires, droit d’auteur sur le logiciel (le code est protégé sans dépôt).",
      "<strong>Preuve et identité numériques</strong> : signature électronique, horodatage, valeur probante.",
      "<strong>Vente en ligne</strong> : information précontractuelle, CGV, droit de rétractation de 14 jours (avec exceptions), obligations de conformité.",
      "<strong>SI et management</strong> : le système d’information alimente la décision et doit être aligné sur la stratégie."
    ],
    pieges: ["Confondre anonymisation et pseudonymisation", "Croire que le RGPD interdit tout traitement", "Oublier les exceptions au droit de rétractation"]
  },
  {
    id: "05-travail",
    num: "05",
    title: "Les mutations du travail",
    tldr: "Un contrat, un lien de subordination, une procédure : trois réflexes juridiques.",
    points: [
      "<strong>Marché du travail</strong> : offre et demande de travail, salaire d’équilibre, chômage conjoncturel ou structurel, rôle des qualifications.",
      "<strong>Sources du droit du travail</strong> : Code du travail, convention collective, accord d’entreprise, contrat, usages. Le principe de faveur arbitre les conflits de normes.",
      "<strong>Salarié ou indépendant</strong> : le critère décisif est le <strong>lien de subordination</strong> (ordres, contrôle, sanctions), apprécié par un faisceau d’indices.",
      "<strong>Contrats</strong> : CDI comme norme ; CDD avec motif, terme et prime de précarité ; intérim, alternance, temps partiel.",
      "<strong>Modification du contrat</strong> (accord du salarié requis) contre <strong>changement des conditions de travail</strong> (pouvoir de direction).",
      "<strong>Rupture</strong> : démission, licenciement pour motif personnel ou économique, rupture conventionnelle, faute grave ou lourde. La procédure conditionne la validité.",
      "<strong>Dialogue social</strong> : CSE, délégués syndicaux, négociation obligatoire, formation et gestion des compétences."
    ],
    pieges: ["Confondre modification du contrat et conditions de travail", "Licenciement sans motif = sans cause réelle et sérieuse", "Un CDD sans motif écrit est requalifié en CDI"]
  },
  {
    id: "06-strategie",
    num: "06",
    title: "Les choix stratégiques",
    tldr: "Diagnostiquer, choisir, mettre en œuvre : et savoir rattacher la décision au SI.",
    points: [
      "<strong>Démarche</strong> : diagnostic externe et interne, définition des options, décision, mise en œuvre, contrôle.",
      "<strong>PESTEL</strong> pour l’externe, <strong>forces de Porter</strong> (concurrence, clients, fournisseurs, entrants, substituts) pour l’industrie, <strong>SWOT</strong> pour la synthèse.",
      "<strong>Interne</strong> : ressources et compétences, critère VRIN (valeur, rareté, inimitabilité, non-substituabilité), chaîne de valeur.",
      "<strong>Options</strong> : spécialisation ou diversification, intégration amont/aval, alliances, internationalisation, domination par les coûts ou différenciation.",
      "<strong>Modalités de croissance</strong> : interne (investissement), externe (fusion, acquisition), conjointe (partenariat, joint-venture).",
      "<strong>Avantage concurrentiel</strong> : il se construit par domaine d’activité stratégique et doit être défendable.",
      "<strong>Lien SIO</strong> : le SI devient un levier d’avantage concurrentiel (données, automatisation, expérience client) et un objet de décision stratégique."
    ],
    pieges: ["Diagnostic sans conclusion", "Confondre croissance externe et croissance conjointe", "Oublier le coût d’intégration d’une acquisition"]
  },
  {
    id: "06b-equilibre-financier",
    num: "06 bis",
    title: "Équilibre financier : bilan, FR, BFR, TN",
    tldr: "Un tableau, trois calculs, un contrôle. Le bloc le plus rentable de l’épreuve.",
    table: `
    <table class="tbl tbl--split">
      <caption>Le bilan, poste par poste, et le calcul où il intervient</caption>
      <thead><tr><th>Poste</th><th>Catégorie</th><th>Calcul</th></tr></thead>
      <tbody>
        <tr class="tbl__group"><td colspan="3">Actif · les emplois</td></tr>
        <tr><td>Immobilisations nettes</td><td>Emploi stable</td><td>FR</td></tr>
        <tr><td>Stocks</td><td>Actif circulant d’exploitation</td><td>BFR</td></tr>
        <tr><td>Créances clients</td><td>Actif circulant d’exploitation</td><td>BFR</td></tr>
        <tr><td>Banque, caisse</td><td>Trésorerie actif</td><td>Contrôle TN</td></tr>
        <tr class="tbl__group"><td colspan="3">Passif · les ressources</td></tr>
        <tr><td>Capital, réserves, résultat</td><td>Capitaux propres</td><td>FR</td></tr>
        <tr><td>Amortissements et provisions</td><td>Ressource stable</td><td>FR</td></tr>
        <tr><td>Emprunts à plus d’un an</td><td>Dette financière stable</td><td>FR</td></tr>
        <tr><td>Dettes fournisseurs, fiscales et sociales</td><td>Passif circulant d’exploitation</td><td>BFR (en moins)</td></tr>
        <tr><td>Concours bancaires, découvert</td><td>Trésorerie passif</td><td>Contrôle TN</td></tr>
      </tbody>
    </table>`,
    calculs: {
      caption: "Les calculs, dans cet ordre (bilan de 515 000 €, CA HT de 900 000 €)",
      rows: [
        ["1. Capitaux permanents", "<span class='calc__f'>capitaux propres + amortissements et provisions + dettes financières à plus d’un an</span><span class='calc__r'>220 000 + 50 000 + 100 000 = <strong>370 000</strong></span>"],
        ["2. FR", "<span class='calc__f'>capitaux permanents - actif immobilisé net</span><span class='calc__r'>370 000 - 300 000 = <strong>70 000</strong></span>"],
        ["3. BFR", "<span class='calc__f'>(stocks + créances clients) - (dettes fournisseurs + dettes fiscales et sociales)</span><span class='calc__r'>(80 000 + 120 000) - (105 000 + 30 000) = <strong>65 000</strong></span>"],
        ["4. TN", "<span class='calc__f'>FR - BFR, contrôlé par trésorerie actif - concours bancaires</span><span class='calc__r'>70 000 - 65 000 = <strong>5 000</strong> · contrôle 15 000 - 10 000 = 5 000 ✔</span>"],
        ["5. BFR en jours", "<span class='calc__f'>(BFR / CA HT) x 360</span><span class='calc__r'>(65 000 / 900 000) x 360 = <strong>26 jours</strong></span>"]
      ]
    },
    points: [
      "<strong>FR &gt; 0</strong> : les ressources longues couvrent les immobilisations et une part du cycle. <strong>FR &lt; 0</strong> : des immobilisations sont financées par du court terme, déséquilibre structurel.",
      "<strong>BFR &gt; 0</strong> = besoin à financer. <strong>BFR &lt; 0</strong> = ressource (SaaS, grande distribution), ou dépendance aux fournisseurs si elle vient d’un délai de paiement anormalement long.",
      "<strong>TN &lt; 0</strong> : le cycle est financé par la banque. Signal de fragilité et de dépendance, pas une faillite, parfois seulement saisonnier.",
      "Sur un an, <strong>BFR en jours ≈ délai de stockage + délai clients - délai fournisseurs</strong> : c’est le seul levier vraiment pilotable.",
      "Leviers : <strong>FR</strong> (capital, emprunt long, autofinancement, cession), <strong>BFR</strong> (relances, stocks, acomptes, délais fournisseurs), <strong>TN</strong> (découvert = symptôme, jamais solution)."
    ],
    pieges: ["FR ≠ argent disponible", "Résultat bénéficiaire ≠ trésorerie positive", "Mélanger HT et TTC dans les délais"]
  },
  {
    id: "07-redaction",
    num: "07",
    title: "Rédiger et qualifier",
    tldr: "Les mots justes et les calculs justes valent des points mécaniques.",
    points: [
      "La <strong>chaîne en quatre temps</strong> (qualification, règle, application, conclusion) vaut dans les trois disciplines.",
      "Employer le <strong>mot du programme</strong> : contrat synallagmatique, vice du consentement, externalité négative, politique structurelle, DAS, partie prenante.",
      "Exploiter un chiffre : <strong>taux de variation</strong> = (V1 − V0) / V0 × 100, <strong>coefficient multiplicateur</strong> = V1 / V0, <strong>points de pourcentage</strong> pour une différence de taux.",
      "Toujours donner <strong>l’unité</strong> et comparer à une référence (année précédente, concurrent, moyenne du secteur).",
      "Soigner les <strong>connecteurs</strong> (en premier lieu, en revanche, par conséquent) et bannir les formulations qui coûtent (« je pense que », « on peut voir que »)."
    ],
    pieges: ["Un chiffre sans interprétation", "Un calcul sans unité", "Une conclusion absente"]
  },
  {
    id: "08-pieges",
    num: "08",
    title: "Les pièges de l’épreuve",
    tldr: "Six réflexes de relecture sauvent plusieurs points.",
    points: [
      "Chaque question commençant par « justifier », « montrer », « analyser » exige une <strong>démonstration</strong>, pas une affirmation.",
      "Chaque <strong>calcul</strong> porte son unité (euros, %, points de pourcentage, jours) et sa date.",
      "Aucune question vide : trois lignes structurées valent toujours mieux que zéro.",
      "Le <strong>document</strong> se cite (annexe, chiffre, citation courte) : sans référence, la réponse est jugée hors sujet.",
      "La <strong>conclusion</strong> répond à la question posée, pas à une autre plus intéressante.",
      "Relecture ciblée : numérotation homogène, sigles définis une fois, orthographe des termes techniques."
    ],
    pieges: ["Recopier le document", "Répondre en vocabulaire courant", "Oublier de répondre à la question finale du dossier"]
  }
];
