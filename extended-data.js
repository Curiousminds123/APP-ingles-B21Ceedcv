/* Extra lessons, readings, practice and open-image credits for the CEED B2.1 units. */
(function () {
  "use strict";
  function quiz(items) {
    return items.map(function (item) {
      return { q: item[0], options: item[1], answer: item[2], why: item[3] };
    });
  }

  window.CEED_EXTENDED = {
    1: {
      explanations: [
        [
          "A verb pattern tells you what form must follow a particular verb. English learners often try to translate the pattern from Spanish, but the English verb is the key: enjoy is normally followed by an -ing form, whereas decide is followed by to + infinitive. Learn each new verb with its pattern as one vocabulary item.",
          "Some verbs accept both forms but change meaning. Remember doing something means you have a memory of it; remember to do something means you must not forget a future task. In a monologue, vary the patterns naturally: I enjoy going to gigs, and I decided to learn the guitar."
        ],
        [
          "So and neither are short, natural ways to show that you share somebody else's experience or opinion. They are followed by an auxiliary and then the subject: So + auxiliary + subject. Choose the auxiliary from the original sentence: do for present simple, did for past simple, have for present perfect, and can for ability.",
          "Use so after a positive statement and neither after a negative one. A statement without an auxiliary still needs do-support: “I love live music.” — “So do I.” The reply is an inversion, not an ordinary subject–verb statement. Stress the auxiliary lightly and the subject clearly."
        ],
        [
          "A well-organised talk helps the listener understand the story, not just the individual sentences. Use sequencing language to introduce stages, contrast to show differences, and result language to explain what happened. One suitable connector in each sentence is usually clearer than several connectors competing for attention.",
          "Although and however do not have the same grammar. Although introduces a dependent clause: Although the venue was small, the atmosphere was amazing. However usually connects two independent sentences: The venue was small. However, the atmosphere was amazing. A pause and suitable punctuation help make the relationship clear."
        ],
        [
          "The sounds /dʒ/ and /tʃ/ are both made near the front of the mouth, but /dʒ/ is voiced and /tʃ/ is voiceless. Touch your throat as you say them: your voice vibrates for /dʒ/, as in jam and genre; it does not vibrate for /tʃ/, as in chair and catchy. Practise the contrast slowly before using it in a sentence.",
          "English intonation signals whether an idea is complete. A falling tone often marks a finished statement or the final item in a list. A rise can show that a list is continuing or that a real yes/no question is being asked. These are useful tendencies, not rigid rules: listen to the speaker's meaning and context."
        ]
      ],
      extraVocabulary: [
        ["headliner", "the main performer at an event", "The headliner came on stage at ten."],
        ["backing vocals", "singing that supports the lead singer", "The backing vocals made the chorus sound fuller."],
        ["set list", "the songs a performer plans to play", "They changed the set list at the last minute."],
        ["venue", "a place where an event happens", "The venue holds about five hundred people."],
        ["to sing along", "to sing at the same time as a recording or performer", "Everyone sang along to the final song."],
        ["moving", "causing strong feelings", "Her acoustic version was unexpectedly moving."]
      ],
      quiz: quiz([
        ["I really enjoy _____ to live music.", ["to listen", "listening", "listen"], 1, "Enjoy is followed by a gerund: enjoy listening."],
        ["They decided _____ a local band after the festival.", ["to follow", "following", "follow"], 0, "Decide is followed by to + infinitive."],
        ["She avoids _____ about her favourite singer in class.", ["to talk", "talking", "talk"], 1, "Avoid is followed by a gerund."],
        ["We hope _____ tickets before they sell out.", ["getting", "get", "to get"], 2, "Hope is followed by to + infinitive."],
        ["The teacher encouraged us _____ our own playlist.", ["to create", "creating", "create"], 0, "Encourage + object + to + infinitive."],
        ["I remember _____ that song at my first concert.", ["to hear", "hearing", "hear"], 1, "Remember + -ing describes a memory of a past event."],
        ["Remember _____ your headphones before the journey.", ["bringing", "bring", "to bring"], 2, "Remember + to-infinitive means do not forget a task."],
        ["“I love this album.” “_____.”", ["So do I.", "So I love.", "Neither do I."], 0, "Agree with a positive present-simple sentence using So do I."],
        ["“I haven't seen them live.” “_____.”", ["So have I.", "Neither have I.", "Neither I have."], 1, "Agree with a negative present-perfect sentence: Neither have I."],
        ["“Mia can play the drums.” “_____.”", ["So can Leo.", "So does Leo.", "Neither can Leo."], 0, "Repeat the modal auxiliary can in the agreement response."],
        ["“We went to the festival.” “_____.”", ["So have we.", "Neither did we.", "So did we."], 2, "Use did to agree with a positive past-simple sentence."],
        ["_____ the sound was poor, the performance was memorable.", ["Although", "However", "Despite"], 0, "Although is followed by a subject and verb."],
        ["The first band was excellent. _____, the headline act was even better.", ["Although", "However", "Because"], 1, "However links two sentences and is followed here by a comma."],
        ["The lyrics were difficult, _____ the crowd knew every word.", ["because", "so", "but"], 2, "But contrasts two clauses without repeating although."],
        ["We arrived early _____ we wanted a good place near the stage.", ["because", "although", "however"], 0, "Because introduces the reason."],
        ["The singer was ill, _____ the concert was postponed.", ["although", "so", "whereas"], 1, "So introduces the result."],
        ["Which word starts with /dʒ/?", ["chair", "genre", "chart"], 1, "Genre begins with the voiced sound /dʒ/."],
        ["Which word starts with /tʃ/?", ["jam", "major", "catchy"], 2, "Catchy begins with the voiceless sound /tʃ/."],
        ["Choose the natural agreement response: “I don't play the piano.”", ["So do I.", "Neither do I.", "Neither I play."], 1, "Use neither + auxiliary + subject after a negative statement."],
        ["Choose the clearest final sentence for a short talk.", ["Overall, that concert changed how I think about music.", "Although overall and because the concert.", "The concert, however because music."], 0, "A complete concluding sentence helps the listener recognise the end of the talk."]
      ]),
      reading: {
        title: "A night that changed my playlist",
        text: "When Maya's cousin invited her to a small outdoor festival, she nearly said no. She enjoyed listening to music at home, but she had never been keen on crowded venues. In the end, she decided to go because her favourite local band was opening the show. While the audience was finding its places, a sudden shower started. Instead of leaving, people shared umbrellas and sang along to a familiar song. The headliner arrived late, yet the delay gave the crowd time to talk and make new friends. By the time the first guitar chords rang out, the rain had stopped. Maya was surprised by how powerful a live performance could feel. She particularly remembers hearing the whole audience sing the chorus together. “I didn't know the words,” she says, “but neither did I need to. Everyone made me feel part of it.” Since that night, Maya has gone to three more gigs. She still prefers small venues, and she now hopes to learn the bass guitar. Her playlist has not changed completely, but it contains more local artists than it did before.",
        questions: [
          ["Why did Maya decide to go to the festival?", ["Her favourite local band was playing.", "She wanted to sell tickets.", "The venue was indoors."], 0],
          ["What happened while the audience was finding its places?", ["The band finished its set.", "A shower started.", "The festival was cancelled."], 1],
          ["How did the crowd respond to the rain?", ["They shared umbrellas and sang.", "They all went home.", "They complained to the band."], 0],
          ["What does Maya remember most clearly?", ["Buying a new guitar.", "Hearing the audience sing together.", "Meeting the headliner backstage."], 1],
          ["What does “neither did I need to” mean in the text?", ["Maya also did not need to know the words.", "Maya knew all the lyrics.", "The audience stopped singing."], 0],
          ["What has Maya done since the festival?", ["She has attended more gigs.", "She has become the headliner.", "She has stopped listening to music."], 0]
        ]
      },
      conversation: [
        ["What kind of music do you enjoy listening to, and when do you usually listen to it?", "Try: I enjoy listening to… because…"],
        ["Describe a concert or performance you remember attending.", "Try: I remember going to…; what made it special was…"],
        ["Is there a musician you hope to see live? Explain why.", "Try: I hope to see… because…"],
        ["How would you react if a concert you had planned to attend was cancelled?", "Try: If that happened, I would…"],
        ["Agree or disagree: “Live music is always better than recorded music.”", "Try: I agree / I don't agree…; So do I / Neither do I."],
        ["Tell a partner about a song that reminds you of a particular person or place.", "Try: Whenever I hear…, I remember…"]
      ],
      photo: {
        src: "assets/lessons/music-concert.jpg",
        alt: "A singer performs on an outdoor stage with musicians playing guitar and drums.",
        prompt: "Describe the live performance. Who is on stage? What instruments, gestures and audience details can you see? What might have happened just before this moment?",
        words: [["stage", "a raised area where performers play"], ["microphone", "a device that makes a voice louder"], ["drummer", "a musician who plays the drums"], ["guitarist", "a musician who plays the guitar"], ["spotlight", "a strong light aimed at a performer"], ["crowd", "a large group of people together"], ["to perform", "to play music in front of an audience"], ["energetic", "full of movement and excitement"]],
        credit: "Photo: “BUCKLE N BOOTS live performance Chidfest Fesival 2025”, BeeMusicUK, CC BY-SA 4.0.",
        source: "https://commons.wikimedia.org/wiki/File:BUCKLE_N_BOOTS_live_performance_Chidfest_Fesival_2025.jpg",
        license: "https://creativecommons.org/licenses/by-sa/4.0/"
      }
    },
    2: {
      explanations: [
        [
          "Articles tell your reader whether a noun is general or which particular thing you mean. A/an introduces one singular countable noun when it is new: We ordered a soup. Use the when the reader can identify it, often because you have already mentioned it: The soup arrived first. Pronunciation determines whether the article is a or an.",
          "Use no article when talking generally about plural countable nouns or uncountable nouns: Street markets are popular; Rice is a staple food. Some nouns change meaning with the article: chicken can mean meat, while a chicken means one animal. Before writing, decide whether the noun is countable and whether it is specific."
        ],
        [
          "The present perfect connects a past event to the present. It is formed with have or has plus the past participle: We have tried the new menu. Use it for life experience when the exact time is not given, recent results, and periods that are not finished yet. Common signals include ever, never, just, already, yet, since and for.",
          "The past simple presents an action at a finished time: We tried the new menu last Friday. Words such as yesterday, in 2022 and two weeks ago normally require the past simple. A useful decision question is “Is the time finished and named?” If yes, choose past simple; if not, check whether the experience connects to now."
        ],
        [
          "A dependent preposition is chosen by the word before it, not freely selected by the speaker. Learn adjective + preposition combinations together: keen on, satisfied with, famous for. The same applies to verbs such as depend on and consist of. Writing the whole phrase in a vocabulary notebook makes errors easier to prevent.",
          "A phrasal verb combines a verb and particle. Some are separable: turn the oven off / turn it off. A pronoun usually goes between the verb and particle, not after it. Other phrasal verbs cannot be separated: look after the children. Many have a more formal one-word alternative, but choose the form that best fits your tone."
        ],
        [
          "A strong review answers a reader's real question: Is it worth visiting, buying or trying? Begin with a clear identification, then give specific evidence about atmosphere, quality and service. Balance positive and negative points instead of simply listing adjectives. Conclude with a direct recommendation and say who would most enjoy the experience.",
          "Mediation has a different purpose: pass on useful information from one person or language to another. Select only details your reader needs, reorganise them if helpful, and paraphrase in natural English. Do not copy a full source or add facts that it does not contain. A useful check is to imagine the reader making a decision from your message."
        ]
      ],
      extraVocabulary: [
        ["savoury", "having a salty or spicy taste rather than a sweet one", "We shared a savoury pastry."],
        ["bland", "having very little flavour", "The sauce was a little bland."],
        ["locally sourced", "obtained from nearby producers", "The café uses locally sourced vegetables."],
        ["portion", "an amount of food served to one person", "The portions were large enough to share."],
        ["to whip up", "to prepare food quickly", "He whipped up a fresh tomato salad."],
        ["to book a table", "to reserve a place to eat", "We booked a table for eight o'clock."]
      ],
      quiz: quiz([
        ["_____ food can bring people together.", ["A", "The", "— (no article)"], 2, "Use no article when food is discussed generally as an uncountable noun."],
        ["We tried _____ new restaurant on King Street.", ["a", "an", "the"], 0, "Use a to introduce one non-specific singular noun beginning with a consonant sound."],
        ["_____ meal we ordered was excellent.", ["A", "The", "— (no article)"], 1, "Use the when the particular meal has already been identified."],
        ["I would like _____ apple tart, please.", ["a", "an", "the"], 1, "Apple begins with a vowel sound, so use an."],
        ["She has _____ interesting recipe for lentil soup.", ["a", "an", "— (no article)"], 1, "Interesting begins with a vowel sound."],
        ["Have you ever _____ Ethiopian food?", ["try", "tried", "trying"], 1, "Present perfect = have/has + past participle."],
        ["They _____ the café in 2021.", ["have opened", "opened", "have open"], 1, "A finished date such as in 2021 takes the past simple."],
        ["We _____ three different dishes so far.", ["have sampled", "sampled", "are sample"], 0, "So far connects the experience with an unfinished period."],
        ["I _____ the new menu yesterday.", ["have seen", "saw", "have saw"], 1, "Yesterday is a finished time expression: use past simple."],
        ["The chef has _____ prepared our order.", ["yet", "just", "ago"], 1, "Just commonly describes a very recent event with the present perfect."],
        ["I'm interested _____ learning about regional food.", ["on", "in", "at"], 1, "The adjective interested is followed by in."],
        ["This recipe consists _____ five simple ingredients.", ["of", "from", "with"], 0, "The verb consist is followed by of."],
        ["The restaurant is famous _____ its homemade bread.", ["with", "for", "about"], 1, "Famous is followed by for."],
        ["Could you turn _____ the cooker after you finish?", ["off it", "it off", "off"], 1, "With separable turn off, the object pronoun goes between the verb and particle."],
        ["Our neighbours look _____ their grandchildren on Fridays.", ["after", "up", "into"], 0, "Look after means take care of and is inseparable."],
        ["Which sentence gives a balanced review?", ["The café is good and nice.", "The soup was excellent, although the service was slow.", "I went there. It exists."], 1, "A balanced review supports its evaluation with concrete detail and contrast."],
        ["Which is the best review conclusion?", ["Everyone should go there because I said so.", "I would recommend it to anyone who enjoys seasonal vegetarian food.", "It was food and service."], 1, "A review should make a clear recommendation to a defined audience."],
        ["In mediation, you should…", ["copy every sentence exactly", "select and paraphrase information for your reader", "add details you guess are true"], 1, "Mediation adapts relevant source information for a particular reader."],
        ["The menu is available online, so _____ can check it before visiting.", ["diners", "diner", "the diners is"], 0, "Diners is the natural plural noun for people eating at a restaurant."],
        ["Choose the correct pair: general noun → particular noun.", ["The coffee was invented; coffee on this table is hot.", "Coffee is popular; the coffee I ordered is cold.", "A coffee is popular; coffee I ordered is cold."], 1, "Use no article for coffee generally and the for the specific drink already identified."]
      ]),
      reading: {
        title: "A market kitchen worth finding",
        text: "At the end of a narrow lane in Kaohsiung, a busy night market stays open long after sunset. I visited Angel Chicken Cutlet with two friends after we had walked around the neighbourhood. The cook worked quickly behind the counter, preparing each portion to order. The menu is short, but the food is freshly made and the prices are reasonable. We chose a savoury chicken cutlet, vegetables and a sweet drink to share. I had never tried that style of street food before, so I was surprised by how crisp the coating was. The portion was generous; however, the market was crowded and there were only a few places to sit. We waited around fifteen minutes because several people were ahead of us. The cook was attentive and explained which sauces were spicy. If you have not visited a night market, this is a welcoming place to start. I would recommend it to travellers who enjoy informal local food, although it may not suit anyone looking for a quiet dinner. The market is easiest to reach on foot from the nearby metro stop, and it is sensible to bring cash.",
        questions: [
          ["When did the writer visit the food stall?", ["After walking around the neighbourhood.", "Before the market opened.", "During a quiet breakfast."], 0],
          ["What was the menu like?", ["Very long and expensive.", "Short, freshly prepared and reasonably priced.", "Only sweet dishes."], 1],
          ["Why did the group wait?", ["The cook had left.", "Other customers were ahead of them.", "The metro was delayed."], 1],
          ["What did the cook explain?", ["Which sauces were spicy.", "How to take the metro.", "How to cook vegetables at home."], 0],
          ["Who does the writer recommend the place to?", ["People who enjoy informal local food.", "People who need a silent dining room.", "People who dislike crowds."], 0],
          ["What practical advice does the writer give?", ["Bring cash and walk from the metro.", "Book a table a month ahead.", "Visit before sunrise."], 0]
        ]
      },
      conversation: [
        ["What dish from your area would you recommend to a visitor, and why?", "Try: I would recommend… because…"],
        ["Describe a restaurant that you have visited recently.", "Try: I have recently visited…; I went there…"],
        ["What is the best meal you have ever eaten? When did you have it?", "Try present perfect for the experience, then past simple for when."],
        ["Would you rather eat at a busy market or a quiet restaurant?", "Try: I would rather… because…"],
        ["Explain how to prepare a simple dish to an English-speaking friend.", "Try: First…, then…, finally…"],
        ["Write or say a short recommendation for a restaurant you know.", "Try: I would recommend it to… although…"]
      ],
      photo: {
        src: "assets/lessons/food-night-market.jpg",
        alt: "A cook prepares food behind a counter in a busy night-market kitchen.",
        prompt: "Describe what the cook is doing and the kitchen equipment you can see. What might be on the menu? What would you like to ask before ordering?",
        words: [["counter", "a long surface where food is prepared or served"], ["stall", "a small stand selling goods or food"], ["ingredients", "the foods used to make a dish"], ["frying pan", "a shallow pan used for cooking"], ["to chop", "to cut food into smaller pieces"], ["to serve", "to give food to a customer"], ["savoury", "salty or spicy rather than sweet"], ["bustling", "busy, lively and full of activity"]],
        credit: "Photo: “Angel Chicken Cutlet Ruifeng Store, 2026 (03)”, Bahnfrend, CC BY-SA 4.0.",
        source: "https://commons.wikimedia.org/wiki/File:Angel_Chicken_Cutlet_Ruifeng_Store,_2026_(03).jpg",
        license: "https://creativecommons.org/licenses/by-sa/4.0/"
      }
    },
    3: {
      explanations: [
        [
          "Narrative tenses help a reader understand the order and shape of past events. Past simple carries the main events forward. Past continuous gives background or describes an action already in progress. Past perfect steps further back to an event that happened before another past event.",
          "A useful story pattern is setting + event + earlier explanation: People were gathering outside the courthouse when the announcement came; they had waited for several hours. Do not use past perfect for every event. Once the earlier time relationship is clear, return to past simple to keep the story moving."
        ],
        [
          "A relative clause adds information about a noun. A defining relative clause answers “which person or thing?” and does not use commas: The campaign that changed the law began locally. You can often omit who, which or that when it is the object, but not when it is the subject of the clause.",
          "A non-defining clause adds extra information about an already identified person or thing and is separated by commas: The campaign, which began locally, gained international support. Do not use that in a non-defining clause. Use whose to show possession and where or when when the meaning refers to place or time."
        ],
        [
          "Collocations are word partnerships that sound conventional to fluent speakers. English often uses a different verb from a direct translation: we raise awareness, grant rights, challenge assumptions and make progress. Learning vocabulary as a whole phrase improves both accuracy and fluency.",
          "In discussion, make the relationship between your ideas explicit. Give a position, support it with a reason or example, acknowledge a different view, and then respond. Phrases such as I see your point; nevertheless… keep disagreement respectful. Avoid presenting a personal opinion as if it were proven fact."
        ],
        [
          "An opinion essay should answer the question, not simply list everything you know about the topic. The introduction identifies the issue and gives a clear position. Each body paragraph develops one main reason and supports it with explanation, an example or evidence. A counterargument shows that you have considered another perspective.",
          "Use connectors to show logic: moreover adds a point, whereas contrasts, consequently introduces a result, and nevertheless introduces a concession. In the conclusion, summarise the line of reasoning and restate your answer. Do not introduce a new argument at the end. When reading aloud, check word stress in relevant noun–verb pairs."
        ]
      ],
      extraVocabulary: [
        ["to introduce legislation", "to formally propose a new law", "The government introduced legislation on equal access."],
        ["to be excluded", "to be prevented from taking part", "Several communities were excluded from the vote."],
        ["to challenge a stereotype", "to question a fixed, oversimplified belief", "The exhibition challenges stereotypes about age."],
        ["to gain recognition", "to become acknowledged or respected", "The campaign gradually gained recognition."],
        ["a landmark decision", "an important ruling that can influence later cases", "The court made a landmark decision."],
        ["to take a stand", "to publicly state your position", "Many students took a stand against discrimination."]
      ],
      quiz: quiz([
        ["While the committee _____, campaigners waited outside.", ["met", "was meeting", "has met"], 1, "Past continuous sets the background action in progress."],
        ["By the time the law passed, campaigners _____ for years.", ["had organised", "organised", "have organise"], 0, "The campaign happened before another past event: use past perfect."],
        ["The first protest _____ at midday.", ["was beginning", "began", "had began"], 1, "Past simple moves a completed narrative event forward."],
        ["When reporters arrived, the speakers _____ already ___.", ["have / left", "had / left", "were / leave"], 1, "Past perfect shows the speakers left before the reporters arrived."],
        ["Choose the correct background and interruption.", ["We were debating when the bell rang.", "We debated when the bell was ringing (interruption).", "We had debating when the bell rang."], 0, "Past continuous gives the background; past simple marks the interrupting event."],
        ["The organisers _____ the venue before the march began.", ["had chosen", "have chose", "were choose"], 0, "Choose happened before began, so use past perfect."],
        ["The writer _____ the speech when the microphone failed.", ["was giving", "had give", "has given"], 0, "The speech was in progress when another event happened."],
        ["The women _____ equality, and then the law changed.", ["were demanding", "had demand", "have demanded"], 0, "Past continuous can describe an ongoing campaign before a later result."],
        ["The activist _____ inspired many people.", ["who", "where", "when"], 0, "Use who for a person."],
        ["The law, _____ was passed in 1965, changed voting rules.", ["that", "which", "what"], 1, "Use which, not that, in a non-defining relative clause."],
        ["This is the town _____ the first meeting took place.", ["where", "who", "whose"], 0, "Use where for a place."],
        ["The historian _____ book we read visited the school.", ["who", "whose", "which"], 1, "Whose indicates possession."],
        ["Choose the correct punctuation.", ["The campaign, which began locally, grew quickly.", "The campaign which, began locally grew quickly.", "The campaign, that began locally grew quickly."], 0, "A non-defining clause is set off by commas and uses which for a thing."],
        ["The proposal was popular, _____ it did not solve every problem.", ["although", "however", "because"], 1, "However links two clauses or sentences as a contrast adverb."],
        ["Which is the natural collocation?", ["raise awareness", "rise awareness", "make awareness up"], 0, "Raise awareness is the standard verb–noun collocation."],
        ["The court _____ a landmark decision.", ["did", "made", "took"], 1, "Make a decision is the conventional collocation."],
        ["Which phrase politely acknowledges a different view?", ["I see your point; nevertheless,…", "You are wrong and nothing else matters.", "I don't listen."], 0, "This phrase acknowledges the other view before presenting a contrast."],
        ["What belongs in the introduction of an opinion essay?", ["The issue and your position.", "A completely unrelated story.", "Only the final paragraph."], 0, "The introduction frames the issue and answers the question with a thesis."],
        ["What should the conclusion do?", ["Add three new examples.", "Restate the answer and summarise the argument.", "Change to a different topic."], 1, "A conclusion synthesises the reasoning and directly answers the prompt."],
        ["Choose the strongest supporting sentence.", ["This is good because good things are good.", "One reason is that equal access allows more people to contribute; for example,…", "Everyone knows I am right."], 1, "Support a claim with a reason and a relevant example."]
      ]),
      reading: {
        title: "The petition that began at a school",
        text: "In 1968, students at a small town school were preparing a history exhibition when they noticed that the local textbook included very few accounts from minority communities. Their teacher, who had recently joined the school, invited them to investigate the missing stories. At first, the class had assumed that the book was complete. However, after they interviewed older residents, they discovered photographs and letters that described a much wider history. The students wrote to the publisher and asked for additional sources to be included in the next edition. Their first letter received no reply. Rather than give up, the group organised a public evening where residents could share memories. The event attracted local journalists and raised awareness of the issue. Two years later, new material was added to the school's reading list. The students' action did not change every textbook, nor did it solve every disagreement about how history should be taught. Nevertheless, it helped teachers begin a conversation with their pupils. The experience suggests that school projects can connect personal memories with historical evidence. It also shows why relative accounts matter: when more voices are included, readers can see how the same period affected different people.",
        questions: [
          ["What first made the students investigate the textbook?", ["It included few accounts from minority communities.", "It was written by one of the students.", "It had no photographs at all."], 0],
          ["What did the students find after interviewing residents?", ["Photographs and letters describing wider history.", "A new school building.", "A missing publisher."], 0],
          ["How did the group respond when the first letter received no reply?", ["They abandoned the project.", "They organised a public evening.", "They changed schools."], 1],
          ["What happened two years later?", ["New material was added to the reading list.", "All disagreements ended.", "The school closed its library."], 0],
          ["What does “who had recently joined the school” describe?", ["The teacher.", "The publisher.", "One of the residents."], 0],
          ["What is the main message of the final paragraph?", ["Including more perspectives gives a wider view of history.", "Textbooks should never change.", "Interviews are more reliable than every other source."], 0]
        ]
      },
      conversation: [
        ["Should school history include more accounts from ordinary people? Why?", "Try: One reason this matters is…; for example…"],
        ["Describe a historical event that changed society.", "Try narrative tenses: While… was happening, … had already…"],
        ["How can a teacher make a class discussion respectful?", "Try: Participants should…; if people disagree,…"],
        ["Do you think voting should be compulsory? Give one reason on each side.", "Try: A benefit is…; on the other hand…"],
        ["Discuss: “Social media helps people challenge stereotypes.”", "Try: It can be argued that…; nevertheless…"],
        ["Choose one person who challenged an unfair rule and explain their impact.", "Try: The person, who… , helped…"]
      ],
      photo: {
        src: "assets/lessons/equality-march.jpg",
        alt: "A woman taking part in an equality march; other people and a flag are visible behind her.",
        prompt: "Describe the people, signs or objects, and the atmosphere of this march. What issue might the participants be discussing? Separate what you can see from what you can only infer.",
        words: [["march", "a group walk organised to express a view"], ["protester", "a person publicly objecting to something"], ["banner", "a large sign carried or displayed by a group"], ["equality", "the state of having the same rights and opportunities"], ["to campaign", "to work publicly for a social or political change"], ["to demand", "to ask for something firmly"], ["to raise awareness", "to help people understand an issue"], ["to take part", "to participate in an activity"]],
        credit: "Photo: “The Equality March - Bnei Barak”, Lizzy Shaanan via PikiWiki Israel, CC BY 2.5.",
        source: "https://commons.wikimedia.org/wiki/File:97548_the_equality_march_-_bnei_barak_PikiWiki_Israel.jpg",
        license: "https://creativecommons.org/licenses/by/2.5/"
      }
    },
    4: {
      explanations: [
        [
          "Modal perfects let you evaluate an action after it happened. The basic form is modal + have + past participle: The airline should have told us about the delay. Should have often expresses a better action or criticism; should not have criticises an action. Could have describes an unrealised option or opportunity.",
          "Do not put the past simple after have. The form is should have gone, not should have went. Negative forms use not after the modal: We could not have predicted the storm. These structures are useful in complaint letters because they explain what a service provider was expected to do."
        ],
        [
          "Wish and if only introduce a situation you want to be different. For a present situation, use a past form: I wish the room were quieter. For a past regret, use the past perfect: If only we had checked the platform. These verb forms show distance from reality; they do not normally refer to a real past time in the first pattern.",
          "Correlative conjunctions work in pairs and join equal grammatical items: both the hotel and the airline, either by email or by phone, neither the guide nor the driver. Keep the structures parallel and do not mix the pair. With neither…nor, the verb agrees with the nearest subject in formal standard English."
        ],
        [
          "Inversion after a negative or limiting phrase is a formal way to add emphasis. Move an auxiliary before the subject: Never have I experienced such a delay. If there is no auxiliary in the original clause, add do, does or did: Not only did the airline lose my bag, but it also failed to reply.",
          "Only when, only after and not until trigger inversion in the main clause, not inside the time phrase: Only after we complained did the staff respond. In ordinary word order, the sentence means the same thing, but inversion sounds more formal and gives the opening phrase extra weight. Use it selectively."
        ],
        [
          "A complaint letter should make it easy for a company to understand what happened and what you want done. State the booking details, describe the events in a clear time order, explain the impact and request a specific remedy. A firm letter is factual; emotional insults weaken its professional tone.",
          "Use a formal salutation. If you do not know the reader's name, write Dear Sir or Madam and close Yours faithfully. If you know the name, use Dear Ms Brown and Yours sincerely. Use conditionals to make a polite request and keep paragraphs focused on one purpose."
        ]
      ],
      extraVocabulary: [
        ["boarding pass", "a document that allows a passenger to board", "I downloaded my boarding pass before leaving home."],
        ["connecting flight", "a second flight needed to reach the final destination", "We missed our connecting flight."],
        ["to reimburse", "to pay someone back for money they spent", "The company agreed to reimburse the taxi fare."],
        ["to lodge a complaint", "to formally report dissatisfaction", "I lodged a complaint through the website."],
        ["unacceptable", "not good enough to be accepted", "The lack of assistance was unacceptable."],
        ["to resolve an issue", "to find a solution to a problem", "Please resolve this issue within ten working days."]
      ],
      quiz: quiz([
        ["The airline _____ passengers about the gate change.", ["should have informed", "should informed", "should has informed"], 0, "Use should + have + past participle for past criticism."],
        ["You _____ your passport in the hotel safe.", ["should have leave", "should have left", "should left"], 1, "Leave has the past participle left after have."],
        ["We _____ taken a taxi, but we chose the bus.", ["could have", "could to have", "could had"], 0, "Could have + past participle describes a past possibility."],
        ["I wish the flight _____ on time.", ["is", "were", "will be"], 1, "Wish + past form describes a present situation you want to change."],
        ["If only we _____ a direct flight!", ["book", "had booked", "have booked"], 1, "Use wish/if only + past perfect for a past regret."],
        ["The room was dirty. The staff were unhelpful. _____ the room _____ the staff met our expectations.", ["Both / and", "Neither / or", "Either / nor"], 0, "Use both…and to join two positive items."],
        ["_____ the guide _____ the driver could answer our question.", ["Neither / nor", "Both / or", "Either / nor"], 0, "The correct negative pair is neither…nor."],
        ["You can contact us _____ by email _____ by telephone.", ["neither / nor", "either / or", "both / nor"], 1, "Use either…or to present a choice."],
        ["Never _____ such a long queue.", ["I have seen", "have I seen", "I saw have"], 1, "Fronted Never requires inversion: auxiliary + subject."],
        ["Not only _____ our flight, but it also lost our luggage.", ["the airline delayed", "did the airline delay", "the airline did delayed"], 1, "Not only at the start of the clause requires inversion and do-support."],
        ["Only after we called _____ a replacement bus.", ["did they send", "they sent", "they did sent"], 0, "Only after triggers inversion in the main clause."],
        ["Not until midnight _____ the hotel room available.", ["was", "it was", "did it was"], 0, "Invert the verb be after not until."],
        ["Which salutation is appropriate when you do not know the recipient's name?", ["Dear Sir or Madam,", "Hi there,", "Dear Alex,"], 0, "Use a formal general salutation when the name is unknown."],
        ["“Dear Ms Patel,” should usually be followed by…", ["Yours faithfully", "Yours sincerely", "Take care"], 1, "A named recipient is normally matched with Yours sincerely."],
        ["Which request is polite and specific?", ["Give my money back now.", "I would be grateful if you could reimburse the taxi fare.", "You should do something."], 1, "State a clear remedy in a professional tone."],
        ["Which detail helps the company identify a booking?", ["A booking reference and travel date.", "A guess about the pilot.", "An unrelated story."], 0, "Include verifiable booking details."],
        ["Choose the correct modal perfect.", ["Passengers should have been informed.", "Passengers should been informed.", "Passengers have should informed."], 0, "Passive modal perfect = should + have + been + past participle."],
        ["I wish I _____ travel insurance before the trip.", ["had bought", "buy", "have buy"], 0, "A past regret takes wish + past perfect."],
        ["Which connector keeps the two items parallel?", ["Both the delay and the missing bag affected us.", "Both the delay or the missing bag affected us.", "Both the delay and affected us the bag."], 0, "Both…and joins matching grammatical elements."],
        ["Choose the strongest complaint-letter closing.", ["I expect a written response within ten working days.", "Whatever, bye.", "This is the worst ever and I hate it."], 0, "A concise, professional closing can set a reasonable response request."]
      ]),
      reading: {
        title: "The suitcase that did not arrive",
        text: "When Lena landed in Manchester after a long journey, her suitcase never appeared on the baggage carousel. She had checked it in at Valencia and had followed the airline's instructions, so she went to the service desk. The first employee told her to wait, but no one could say when the bag would arrive. Not until late that evening did the airline confirm that the suitcase had been sent to the wrong airport. Lena was travelling for a conference the next morning and had no change of clothes. She bought essential items and kept every receipt. The airline should have given her clearer information at the airport, and it could have arranged delivery to her hotel. Instead, Lena had to call several times before a member of staff explained the claim process. She later wrote a formal complaint, giving the flight number, the baggage tag and the dates of her calls. She asked the airline to reimburse the essential purchases and explain how it would prevent the same problem from happening again. The company apologised and reimbursed part of her costs. Lena was pleased that the claim was resolved, although she felt that customer support should have acted sooner. Her advice to other travellers is simple: photograph the baggage tag and keep receipts if a bag is delayed.",
        questions: [
          ["What happened after Lena landed?", ["Her suitcase did not arrive on the carousel.", "Her flight was cancelled.", "The conference was postponed."], 0],
          ["Why did Lena need the suitcase soon?", ["She was attending a conference the next morning.", "She was moving house.", "She had to return to the airport."], 0],
          ["What did the airline eventually confirm?", ["The bag had gone to the wrong airport.", "The bag was still in Valencia.", "The bag had been delivered to the conference."], 0],
          ["What information did Lena include in her complaint?", ["Flight number, baggage tag and call dates.", "Her favourite travel destinations.", "A list of other passengers."], 0],
          ["How did Lena feel about the resolution?", ["The costs were partly reimbursed, but support was slow.", "The airline ignored her completely.", "She received a new suitcase before landing."], 0],
          ["What does Lena recommend doing?", ["Keep receipts and photograph the baggage tag.", "Discard all travel documents.", "Avoid reporting delayed luggage."], 0]
        ]
      },
      conversation: [
        ["Describe a journey that did not go as planned.", "Try: We had expected to…, but…; they should have…"],
        ["What should a hotel do if a guest's room is not ready?", "Try: The hotel should…; if I were the manager,…"],
        ["Would you rather travel by train or plane for a short trip?", "Try: Either…or…; both…and…"],
        ["Describe a service problem you would complain about formally.", "Try: Not only did…, but…"],
        ["What would you pack in your hand luggage for a long journey?", "Try: I would make sure I had…"],
        ["Give a polite complaint to a travel company about a cancelled booking.", "Try: I am writing to complain about…; I would be grateful if…"]
      ],
      photo: {
        src: "assets/lessons/airport-baggage-claim.jpg",
        alt: "An airport baggage-claim area with luggage carousels, signs and travellers waiting.",
        prompt: "Describe the baggage-claim area. What can travellers see or do here? How might someone ask for help if a suitcase did not arrive?",
        words: [["baggage carousel", "a moving belt where checked bags are collected"], ["suitcase", "a case used for carrying clothes while travelling"], ["baggage tag", "a label attached to checked luggage"], ["arrival board", "a screen showing incoming flights"], ["traveller", "a person making a journey"], ["to collect", "to go and get something"], ["delayed", "happening later than expected"], ["to report", "to formally tell an organisation about a problem"]],
        credit: "Photo: “Baggage claim carousels at Terminal 1 of Toronto Pearson International Airport (YYZ) (2)”, Silver Dovelet, CC BY-SA 4.0.",
        source: "https://commons.wikimedia.org/wiki/File:Baggage_claim_carousels_at_Terminal_1_of_Toronto_Pearson_International_Airport_(YYZ)_(2).jpg",
        license: "https://creativecommons.org/licenses/by-sa/4.0/"
      }
    },
    5: {
      explanations: [
        [
          "Used to describes a past state or repeated habit that is no longer true or is no longer regular: I used to be shy; We used to walk to school. The form is used to + base infinitive. In negatives and questions, use did and the base form: Did you use to live here?",
          "Would can describe repeated past actions when the time is already clear, but it is not normally used for past states: Every Sunday, my aunt would take us to the park. For a finished single event, use the past simple: She moved to the city in 2015. Choose the form that matches habit, state or completed event."
        ],
        [
          "Be used to means be familiar or comfortable with a situation. Get used to means become familiar with it over time. In both phrases, to is a preposition, so it is followed by a noun or an -ing form: He is used to the noise; He is getting used to working nights.",
          "Compare both patterns with past-habit used to: She used to work nights describes an old routine; She is used to working nights describes a current familiar situation. In questions and different tenses, change be/get, not the -ing form: Are you getting used to the new schedule?"
        ],
        [
          "A question tag is a short question added to a statement. A positive statement usually takes a negative tag; a negative statement usually takes a positive tag: You enjoy walking, don't you? Use the same auxiliary as the main clause. If there is no auxiliary, use do, does or did.",
          "Match the tag's pronoun to its subject and check the tense. They have met before, haven't they? She used to live here, didn't she? Tags can check facts, invite agreement or keep a conversation going. Intonation changes the purpose: a rising tag checks information; a falling tag often expects agreement."
        ]
      ],
      extraVocabulary: [
        ["to stay active", "to keep moving and doing physical activities", "The group meets twice a week to stay active."],
        ["joint", "a place where two bones meet", "The warm-up helps protect your joints."],
        ["to be in one's seventies", "to be between 70 and 79 years old", "My neighbour is in her seventies."],
        ["supportive", "helpful and encouraging", "His family is very supportive."],
        ["independent", "able to do things without help", "The programme helps older adults remain independent."],
        ["well-being", "the state of being healthy and content", "Social contact can improve well-being."]
      ],
      quiz: quiz([
        ["I _____ play football after school, but I don't now.", ["used to", "am used to", "would to"], 0, "Used to + infinitive describes a past habit that has changed."],
        ["My grandmother _____ a small bookshop.", ["would own", "used to own", "is used to own"], 1, "Use used to for a past state such as owning something."],
        ["Every summer, we _____ walk along the coast.", ["would", "are used to", "would to"], 0, "Would + base verb can describe a repeated past action."],
        ["They _____ to the new town in 2019.", ["used to move", "moved", "would moved"], 1, "A single event at a finished time takes past simple."],
        ["Did you _____ wear glasses as a child?", ["used to", "use to", "would to"], 1, "After did, use the base form: use to."],
        ["She is used to _____ early for work.", ["get up", "getting up", "got up"], 1, "Be used to + -ing because to is a preposition here."],
        ["I am still getting used to _____ in a new country.", ["live", "living", "lived"], 1, "Get used to is followed by a noun or gerund."],
        ["Are you _____ to the warmer climate?", ["get used", "used", "use"], 1, "Are you used to asks whether something is familiar."],
        ["He wasn't used to _____ so much exercise.", ["do", "doing", "did"], 1, "Was used to + gerund describes a past familiar situation."],
        ["It took her a few weeks to get used to _____ alone.", ["living", "live", "lived"], 0, "Get used to + -ing describes becoming familiar with a situation."],
        ["She enjoys walking, _____?", ["doesn't she", "isn't she", "did she"], 0, "Positive present-simple statement → negative tag with does."],
        ["They aren't feeling tired, _____?", ["are they", "aren't they", "do they"], 0, "Negative statement → positive tag; match be and the subject."],
        ["He used to live nearby, _____?", ["usedn't he", "didn't he", "doesn't he"], 1, "Use did in the tag after used to."],
        ["You have met my sister, _____?", ["haven't you", "don't you", "didn't you"], 0, "Match the present-perfect auxiliary have."],
        ["Let's take a short break, _____?", ["will we", "shall we", "do we"], 1, "The usual tag after let's is shall we?"],
        ["Which is a tactful way to offer advice?", ["You must change everything immediately.", "You could try a short walk after lunch.", "You should to exercise."], 1, "Could makes advice a gentle suggestion; should is followed by a base verb."],
        ["Which adjective means kind and encouraging?", ["supportive", "stiff", "overbooked"], 0, "Supportive describes a person who provides help and encouragement."],
        ["Choose the clear, respectful description.", ["She is an old thing who moves slowly.", "She is a thoughtful woman with a confident posture.", "She looks exactly like every older person."], 1, "Use specific, respectful language rather than stereotypes."],
        ["Which is a past state rather than a repeated action?", ["We would visit every Sunday.", "He used to own a bicycle shop.", "They would walk home."], 1, "Own describes a state, so used to is the appropriate form."],
        ["Choose a useful mediation question.", ["Would you like me to explain the main recommendation?", "Why did you not read this already?", "The leaflet says some words."], 0, "A mediation speaker checks the listener's needs and offers clarification."]
      ]),
      reading: {
        title: "A walking group that made a difference",
        text: "For years, the Alki walking group has brought neighbours together for a weekly walk by the water. In a photograph from 1980, several older residents are enjoying time outdoors near a local playground. The picture does not tell us everything about the people in it, but it gives us a reason to ask what helps a community stay connected. One current member, Ruth, used to spend most afternoons at home after she retired. She was not used to exercising with other people, and she worried that she would be too slow. A friend invited her to join the group for one short walk. At first, Ruth found the route tiring; now she is used to the distance and enjoys the conversation as much as the exercise. The group does not compete or expect everyone to move at the same pace. Members stop when somebody needs a rest and choose accessible routes where possible. Ruth says the best change is that she knows more people in her neighbourhood. The group also shares information about local activities and transport. A regular walk cannot solve every health problem, and people should ask a health professional before changing their exercise routine. However, the story suggests that gentle movement and social contact can support well-being. A welcoming group, clear advice and an activity that can be adapted may make it easier for people to take part.",
        questions: [
          ["How often does the walking group meet?", ["Every week.", "Once a year.", "Every morning at sunrise."], 0],
          ["Why was Ruth unsure about joining?", ["She worried she would be too slow and was not used to group exercise.", "She disliked her neighbourhood.", "The route was abroad."], 0],
          ["What is Ruth used to now?", ["The distance of the walk.", "Working at the playground.", "Travelling by plane."], 0],
          ["How does the group support members?", ["It adapts the pace and stops when somebody needs rest.", "It makes everyone compete.", "It never changes its route."], 0],
          ["What does the text say about exercise advice?", ["A health professional should be consulted before changing a routine.", "Everyone should exercise in exactly the same way.", "Walking solves every health problem."], 0],
          ["What is a central message of the story?", ["Adaptable activity and social contact may support well-being.", "Only fast walking is worthwhile.", "People should avoid meeting neighbours."], 0]
        ]
      },
      conversation: [
        ["Describe a routine you had as a child that you no longer have.", "Try: I used to…, but now…"],
        ["What is something new that you have gradually got used to?", "Try: At first…, but I am now used to…"],
        ["Describe someone who has influenced you and explain why.", "Try: They used to…; what I admire most is…"],
        ["What advice would you give a friend who has moved to a new country?", "Try: You could…; it might help to…"],
        ["Talk about a healthy habit you would like to develop.", "Try: I would like to get used to…"],
        ["Ask your partner two question-tag questions about past routines.", "Try: You used to… , didn't you? You enjoy… , don't you?"]
      ],
      photo: {
        src: "assets/lessons/senior-walking-club.jpg",
        alt: "Older adults spending time outdoors together in a Seattle playground in 1980.",
        prompt: "Describe the people and setting without making assumptions about their health or relationships. What activities might they be doing? What details suggest the photograph is historical?",
        words: [["playground", "an outdoor area for recreation"], ["swing", "a seat hanging from ropes or chains"], ["neighbourhood", "the local area where people live"], ["to socialise", "to spend time talking with other people"], ["to take part", "to participate in an activity"], ["active", "involving movement or regular activity"], ["black-and-white", "showing shades of grey rather than colour"], ["community", "people connected by a local area or shared interest"]],
        credit: "Photo: “Seattle - Senior Citizen Walking Club at Alki Playground, 1980”, Seattle Municipal Archives, CC BY 2.0.",
        source: "https://commons.wikimedia.org/wiki/File:Seattle_-_Senior_Citizen_Walking_Club_at_Alki_Playground,_1980_(51353894704).jpg",
        license: "https://creativecommons.org/licenses/by/2.0/"
      }
    },
    6: {
      explanations: [
        [
          "The passive voice changes the focus of a sentence. Use it when the action, object or result is more important than the person who did it: The gallery was opened in 1902. The basic pattern is a form of be + past participle. Keep the tense on be: is displayed, was displayed, has been displayed.",
          "Use by + agent only when the agent matters to your reader: The mural was painted by a local artist. If the agent is obvious, unknown or unimportant, omit it. Passive voice is common in museum descriptions, reports and formal writing because it foregrounds the work or process."
        ],
        [
          "Inversion after a fronted negative or limiting expression gives a sentence formal emphasis. Move the auxiliary before the subject: Rarely have I seen a more striking exhibition. When a present- or past-simple clause has no auxiliary, add do, does or did: Not only did the artist paint the wall, but she also designed the space.",
          "Only after, only when and not until cause inversion in the main clause that follows the opening phrase: Only after I read the label did I understand the work. Do not invert inside the time clause itself. Use these structures selectively: one accurate example can make writing emphatic without making it difficult to read."
        ],
        [
          "Gradable adjectives describe qualities that can vary by degree: interesting, large, crowded. They combine with very, rather, fairly and a bit. Non-gradable adjectives describe an absolute or strong category: fascinating, enormous, exhausted. They commonly combine with absolutely, completely or utterly.",
          "Some adjectives can be interpreted in more than one way, so check the intended meaning and dictionary examples. Avoid using very and absolutely as if they were interchangeable. To express a reaction, name the reason: I was disappointed that the sculpture was not on display; I was amazed by the detail."
        ],
        [
          "Written mediation is a reader-focused summary, not a translation exercise. First identify what your reader wants to know; then select relevant details, group them logically and paraphrase. Preserve facts such as dates and prices accurately, but use your own sentence structure and explain unfamiliar terms where needed.",
          "A clear email or short report gives context, organises key points and makes information easy to act on. If the source contains too much information, leave out what does not help the reader. Useful signals include The key point is…, In other words… and One practical detail is…"
        ]
      ],
      extraVocabulary: [
        ["landscape", "art showing a natural or urban view", "The landscape includes a dramatic coastline."],
        ["portrait", "an artwork representing a person", "The portrait draws attention to the subject's expression."],
        ["brushstroke", "a mark made by a paintbrush", "You can see each brushstroke up close."],
        ["on loan", "temporarily borrowed for an exhibition", "The painting is on loan from a private collection."],
        ["admission", "permission to enter a place, often for a fee", "Admission is free on the first Sunday."],
        ["step-free access", "a route without stairs or steps", "The north entrance offers step-free access."]
      ],
      quiz: quiz([
        ["The gallery _____ in 1902.", ["opened", "was opened", "was open by"], 1, "Past passive = was/were + past participle."],
        ["The mural _____ by a local artist last summer.", ["painted", "was painted", "was painting"], 1, "Use be + past participle for a passive action."],
        ["Several works _____ to the museum this year.", ["have been lent", "have lent", "were lend"], 0, "Present-perfect passive = have/has been + past participle."],
        ["The sculpture should _____ in a safe place.", ["protect", "be protected", "been protect"], 1, "Modal passive = modal + be + past participle."],
        ["Which is the correct passive of “They restore the painting every year”?", ["The painting is restored every year.", "The painting restored every year.", "The painting is restore every year."], 0, "Present simple passive = am/is/are + past participle."],
        ["The photographs _____ before the exhibition opened.", ["had been taken", "had took", "were take"], 0, "Past-perfect passive = had been + past participle."],
        ["Choose the natural sentence.", ["Never I have seen such detail.", "Never have I seen such detail.", "Never did I have seen such detail."], 1, "Fronted Never requires auxiliary–subject inversion."],
        ["Not only _____ the artist paint the mural, but she also designed the garden.", ["did", "has", "was"], 0, "Use did + subject + base verb for past-simple inversion."],
        ["Only after I read the label _____ the reference.", ["I understood", "did I understand", "I did understood"], 1, "Only after triggers inversion in the main clause."],
        ["Rarely _____ an exhibition that explains the process so clearly.", ["we see", "do we see", "we do saw"], 1, "Use do-support for present-simple inversion."],
        ["“The room was _____ crowded.” Choose a gradable intensifier.", ["very", "absolutely", "utterly"], 0, "Crowded is gradable: very crowded is natural."],
        ["“The performance was _____ extraordinary.”", ["very", "absolutely", "fairly"], 1, "Absolutely commonly intensifies a non-gradable adjective."],
        ["Which combination is most natural?", ["absolutely fascinating", "very fascinating (in standard emphasis)", "utterly a little interesting"], 0, "Fascinating is commonly treated as non-gradable in this pattern."],
        ["I was disappointed _____ the main gallery was closed.", ["that", "from", "for"], 0, "Disappointed that introduces the reason as a clause."],
        ["I was impressed _____ the scale of the sculpture.", ["by", "from", "at"], 0, "Impressed by is a standard adjective–preposition combination."],
        ["In written mediation, you should…", ["copy long passages word for word", "select and paraphrase relevant details", "add information that sounds plausible"], 1, "Select and paraphrase the source information for the reader."],
        ["The source says tickets cost €8. What should the mediation do?", ["Preserve the price accurately.", "Change it to an approximate amount.", "Leave out the price even if it is useful."], 0, "Important factual details such as prices must remain accurate."],
        ["Which phrase clearly introduces a useful summary?", ["The key point for visitors is…", "It says stuff, anyway.", "In my opinion the ticket costs… (without checking)"], 0, "This phrase signals the most relevant information for the reader."],
        ["Which passive sentence focuses on the artwork?", ["The council restored the painting.", "The painting was restored last year.", "Someone and the council restored it by."], 1, "The passive places the artwork in the subject position."],
        ["Choose the best museum advice.", ["You may want to book online because weekend slots fill up.", "Go whenever because I guess.", "The website probably has a price."], 0, "Clear mediation gives practical, source-based information."]
      ]),
      reading: {
        title: "The story behind a painting",
        text: "Ford Madox Brown's painting The Last of England shows a family travelling away from Britain on a small ship. The work was created in the nineteenth century, when many people left home to seek a different future. The central figures are seated close together, surrounded by other passengers and belongings. Their expressions appear serious, and the sea is visible behind them. The painting does not tell us exactly what each person is thinking, but its details invite questions about departure, uncertainty and family life. When the painting is displayed in a gallery, visitors can look closely at the clothing, faces and objects in the boat. A museum label may explain the historical context, while an audio guide can provide further information. It is useful to distinguish what can be seen from what we infer: we can see a family on a journey; we may infer that they are anxious, but we cannot know their private thoughts from the image alone. Museums often borrow works from other collections, so an exhibition can include objects that are not normally shown together. Before visiting, check opening hours, admission prices and step-free access on the museum website. If you are interested in the painting, allow enough time to read the label and notice how the artist has arranged the figures. Looking slowly can reveal details that are easy to miss at first.",
        questions: [
          ["What does the painting show?", ["A family travelling by ship.", "An empty museum.", "A modern airport."], 0],
          ["When was the painting created?", ["In the nineteenth century.", "Last year.", "In ancient Rome."], 0],
          ["What can visitors observe directly?", ["The figures, clothing and objects.", "The family's private thoughts.", "The exact words they spoke."], 0],
          ["Why should a visitor check the museum website?", ["To find opening hours, prices and access information.", "To change the painting.", "To avoid reading the label."], 0],
          ["What does the text say about interpretation?", ["Separate visible evidence from what we infer.", "Every interpretation is a confirmed fact.", "The painting explains every person's thoughts."], 0],
          ["What is the writer's practical suggestion?", ["Allow time to look carefully at the details.", "Only visit when the gallery is closed.", "Ignore the exhibition information."], 0]
        ]
      },
      conversation: [
        ["Describe a work of art that you like or dislike.", "Try: It was created by…; what stands out is…"],
        ["Should public money support museums and galleries? Why or why not?", "Try: One reason is…; however…"],
        ["Choose a museum you would recommend to a visitor.", "Try: The exhibition is held…; you should…"],
        ["Discuss whether graffiti can be a form of art.", "Try: It could be argued that…; nevertheless…"],
        ["Describe how you felt the last time you saw an artwork that surprised you.", "Try: I was amazed by…; never have I…"],
        ["Mediate museum information for an English-speaking friend.", "Try: The website explains that…; the key point is…"]
      ],
      photo: {
        src: "assets/lessons/art-last-of-england.jpg",
        alt: "Ford Madox Brown's painting The Last of England, depicting a family travelling on a small boat.",
        prompt: "Describe the people, clothing, objects and setting. What mood do their expressions create? Which details can you observe directly, and what might you infer?",
        words: [["portrait", "an artwork showing a person or people"], ["foreground", "the part of a picture nearest to the viewer"], ["background", "the part of a picture furthest from the viewer"], ["brushstroke", "a mark made by a paintbrush"], ["composition", "the arrangement of elements in an artwork"], ["expression", "the look on someone's face"], ["oil painting", "a picture made using oil-based paints"], ["to depict", "to show or represent a person or scene"]],
        credit: "Image: “The Last of England”, Ford Madox Brown (1855–1860), public-domain artwork; digital image via Google Art Project / Wikimedia Commons.",
        source: "https://commons.wikimedia.org/wiki/File:Ford_Madox_Brown_-_The_Last_of_England_-_Google_Art_Project.jpg",
        license: "https://commons.wikimedia.org/wiki/File:Ford_Madox_Brown_-_The_Last_of_England_-_Google_Art_Project.jpg"
      }
    }
  };
}());

window.CEED_EXTENDED["1"].mediation = {
  title: "Help a friend choose a live music event",
  intro: "Read a short event listing, select the details your friend needs and explain them in your own words. Do not translate every line.",
  icon: "♫",
  scenario: "Community Sound Night · event listing",
  source: "Fictional practice listing: three local acts; doors open at 18:30; the headline band starts at 20:00; tickets are available online and at the door.",
  audience: "A friend who enjoys live music but wants to plan the evening and know when the main band performs.",
  steps: [
    ["Find the need", "Your friend asks about the main act and when to arrive."],
    ["Select key facts", "Keep the number of acts, door time and headline start time."],
    ["Rephrase and adapt", "Explain the schedule naturally; do not copy the listing."],
    ["Check the message", "Make sure the two times are clear and in the right order."]
  ],
  facts: [
    ["🎤", "Three local acts", "The event includes three performers."],
    ["◷", "Doors: 18:30", "This is when visitors can enter."],
    ["★", "Headline: 20:00", "The main band is scheduled to start at eight."],
    ["↗", "Two ways to buy", "Tickets are available online or at the door."]
  ],
  phrases: ["The listing says that…", "The main act is due to…", "If you want to see…, you could…", "The key time to remember is…"],
  task: "Send your friend a short message with the event schedule and one practical suggestion about arrival time.",
  model: "The listing says that three local acts are performing. The doors open at 18:30, and the headline band is due on stage at 20:00. If you want to see the whole event, you could arrive when the doors open. Tickets are available online or at the door.",
  checks: ["I selected only useful details.", "I kept the times accurate.", "I used my own words."]
};

window.CEED_EXTENDED["2"].mediation = {
  title: "Explain a menu to someone with dietary questions",
  intro: "Use the fictional menu information below to help a visitor choose. Pass on the source details carefully and recommend checking directly if an ingredient is unclear.",
  icon: "♨",
  scenario: "The Night Market Kitchen · sample menu card",
  source: "Fictional practice menu: vegetable noodles are labelled vegetarian; the peanut sauce contains peanuts; staff can provide an ingredient list on request.",
  audience: "A visitor who wants a vegetarian option and needs to avoid making assumptions about ingredients.",
  steps: [
    ["Identify the question", "The visitor wants to know which choice is labelled vegetarian."],
    ["Select relevant information", "Mention the noodles, the peanut sauce and the available ingredient list."],
    ["Paraphrase for the visitor", "Explain the labels simply without adding ingredients that are not listed."],
    ["Give a safe next step", "Suggest asking staff for the ingredient list if they need more detail."]
  ],
  facts: [
    ["🥬", "Vegetable noodles", "The sample menu labels this dish vegetarian."],
    ["⚠", "Peanut sauce", "The sauce contains peanuts."],
    ["▤", "Ingredient list", "Staff can provide more ingredient information."],
    ["◎", "Check directly", "Use the restaurant's information for any specific dietary need."]
  ],
  phrases: ["This dish is labelled…", "The menu states that…", "It is worth checking whether…", "You can ask the staff for…"],
  task: "Explain the menu options in a short spoken message. Include the peanut information and avoid promising that an unlisted dish is suitable.",
  model: "The vegetable noodles are labelled vegetarian. The menu also says that the peanut sauce contains peanuts. If you need to check any other ingredients, the staff can provide an ingredient list, so it would be best to ask them before ordering.",
  checks: ["I did not invent ingredients.", "I included the relevant caution.", "I made the information easy to act on."]
};

window.CEED_EXTENDED["3"].mediation = {
  title: "Introduce a local history exhibition",
  intro: "Turn a short exhibition notice into a clear explanation for a visitor. Separate what the notice confirms from any personal interpretation.",
  icon: "▤",
  scenario: "People and Places · community exhibition notice",
  source: "Fictional practice notice: the exhibition uses photographs, personal accounts and archive documents; each display includes a date and a short source note.",
  audience: "An international visitor who is interested in local history but is unfamiliar with the people and events.",
  steps: [
    ["Work out the visitor's interest", "They want to know what they will find in the exhibition."],
    ["Choose the strongest details", "Select the three types of material and the information on each display."],
    ["Explain the value", "Show how different sources offer different perspectives."],
    ["Stay accurate and balanced", "Do not present one account as the only possible point of view."]
  ],
  facts: [
    ["▧", "Photographs", "Visual records help visitors notice people and places."],
    ["❝", "Personal accounts", "Individual voices add experiences and perspectives."],
    ["▤", "Archive documents", "Historical records provide another source of evidence."],
    ["◷", "Dates and sources", "Each display gives a date and a short source note."]
  ],
  phrases: ["The exhibition brings together…", "One display focuses on…", "The source note explains…", "This gives visitors a chance to…"],
  task: "Recommend the exhibition to a visitor and explain how its different sources help people explore the past.",
  model: "The exhibition brings together photographs, personal accounts and archive documents. Each display includes a date and a short source note, so visitors can see where the information comes from. It may be an interesting way to explore different perspectives on local history.",
  checks: ["I explained the source types.", "I avoided unsupported claims.", "I used balanced language."]
};

window.CEED_EXTENDED["4"].mediation = {
  title: "Help a traveller respond to a baggage problem",
  intro: "Use a fictional airport help notice to explain the next steps. Keep practical instructions separate from assumptions about compensation or airline rules.",
  icon: "✈",
  scenario: "Airport Help Desk · delayed baggage notice",
  source: "Fictional practice notice: report missing baggage at the airport help desk before leaving; keep the baggage receipt; use the reference number in later enquiries.",
  audience: "A traveller whose suitcase has not arrived and who is unsure what to do before leaving the airport.",
  steps: [
    ["Focus on the immediate need", "The traveller needs clear steps they can take now."],
    ["Order the instructions", "Report the problem, keep the receipt and note the reference number."],
    ["Explain without jargon", "Use short action verbs and a calm, supportive tone."],
    ["Avoid unsupported promises", "The notice does not specify compensation or delivery times."]
  ],
  facts: [
    ["1", "Report it here", "Speak to the airport help desk before leaving."],
    ["2", "Keep the receipt", "The baggage receipt may help identify the case."],
    ["3", "Note the reference", "Use the reference number in future enquiries."],
    ["!", "Check official updates", "The notice gives no delivery estimate or compensation details."]
  ],
  phrases: ["The notice advises you to…", "Before you leave, make sure…", "Keep a note of…", "It does not say whether…"],
  task: "Explain the three immediate actions to the traveller and make clear which details they need to confirm with the airline.",
  model: "The notice advises you to report the missing suitcase at the airport help desk before you leave. Keep your baggage receipt and make a note of the reference number for later enquiries. The notice does not give a delivery time, so you will need to check directly with the airline.",
  checks: ["I put the steps in order.", "I did not promise an outcome.", "I pointed out what the source does not say."]
};

window.CEED_EXTENDED["5"].mediation = {
  title: "Share information about a community activity",
  intro: "Summarise a fictional community leaflet for someone considering a new activity. Pass on practical details while avoiding medical claims or assumptions.",
  icon: "◎",
  scenario: "Neighbourhood Walking Group · sample leaflet",
  source: "Fictional practice leaflet: a weekly group walk has a shorter route option; participants can take breaks; contact the organiser to ask about access and meeting arrangements.",
  audience: "A neighbour who would like to meet people but wants to know whether the activity can be adapted to their pace.",
  steps: [
    ["Understand the concern", "The neighbour wants to know whether they can take part comfortably."],
    ["Select helpful details", "Include the shorter route, breaks and organiser contact."],
    ["Use inclusive language", "Describe the options without labelling or judging the person."],
    ["Encourage a suitable check", "Suggest contacting the organiser about access and arrangements."]
  ],
  facts: [
    ["↔", "Shorter route", "The leaflet says there is a shorter option."],
    ["Ⅱ", "Breaks are possible", "Participants can stop and rest during the walk."],
    ["♧", "Weekly activity", "The group meets once a week, according to the leaflet."],
    ["✉", "Ask the organiser", "Check access details and where the group meets."]
  ],
  phrases: ["The leaflet says that…", "There is also an option to…", "You could contact the organiser to…", "It may be worth asking about…"],
  task: "Explain the flexible options and suggest how the neighbour can check whether the arrangements suit them.",
  model: "The leaflet describes a weekly group walk with a shorter route option, and participants can take breaks. If you would like to find out more, you could contact the organiser to ask about access and the meeting arrangements. You can decide whether it feels right for you.",
  checks: ["I used respectful, inclusive language.", "I shared only leaflet information.", "I left the choice with the listener."]
};

window.CEED_EXTENDED["6"].mediation = {
  title: "Plan a museum visit with useful information",
  intro: "Select the details a visitor needs from a fictional museum guide and organise them into a helpful message before they travel.",
  icon: "▣",
  scenario: "The City Gallery · visitor information card",
  source: "Fictional practice guide: the current exhibition is on level two; step-free access is available by lift; visitors should check the gallery website for current opening times and ticket information.",
  audience: "A visitor who is interested in the exhibition and wants to plan an accessible visit.",
  steps: [
    ["Find the visitor's priorities", "They need the exhibition location and access information."],
    ["Select confirmed details", "Keep the floor, lift access and website reminder."],
    ["Paraphrase and organise", "Present the information in the order the visitor will use it."],
    ["Check changing details", "Opening times and ticket information should be checked on the current website."]
  ],
  facts: [
    ["▣", "Exhibition · level two", "The guide locates the current exhibition on the second floor."],
    ["↕", "Step-free access", "A lift is available for access."],
    ["◷", "Opening times", "Check the gallery website for current hours."],
    ["€", "Ticket information", "Confirm current ticket details before travelling."]
  ],
  phrases: ["The guide explains that…", "You can reach the exhibition by…", "For the latest information…", "It would be a good idea to check…"],
  task: "Write a concise message with the exhibition location and access information, then direct the visitor to the source for details that may change.",
  model: "The current exhibition is on level two, and the guide says that step-free access is available by lift. Before you travel, check the gallery website for the latest opening times and ticket information, as these details may change.",
  checks: ["I kept the confirmed details accurate.", "I made the access information clear.", "I flagged details that may change."]
};
