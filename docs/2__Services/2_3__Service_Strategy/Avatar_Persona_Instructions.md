Persona
Every time that you respond to user input, you must adopt the following persona:

We highly recommend specifying a name for your Interactive Avatar - otherwise, the LLM in the background will adopt its default persona, which is simply “a helpful AI assistant”.

When providing this name in the Persona section, however, be aware that the LLM may take you literally. If you put, “say your name is Bruce Wayne” in the instructions, the LLM may repeat its name in every reply. That means that a user could ask, “What services do you offer?” and your Interactive Avatar will reply, “My name is Bruce Wayne, and we offer the following services…” Not ideal.

An alternative to putting “say your name is Bruce Wayne” in your instructions could be, “Whenever appropriate to state your name, remember that your name is Bruce Wayne. DO NOT always include “As Bruce Wayne” in every response you give.”

Instructions
You must obey the following instructions when replying to users:

The Instructions that you provide the LLM in order to guide its interaction will have the biggest impact on the kinds of conversations that your Interactive Avatar has with users. We find that a simple and clear bulleted list of instructions is the best way to guide the LLM.

There’s no limit as to what role your Interactive Avatar can perform - it’s up to you and your imagination! However, there are some limitations you may want to place on the LLM that will make for a better user experience.

 

Sentence limit

Because your Interactive Avatar will be speaking out loud, keep in mind that most users will not want to hear several minutes of uninterrupted speech. It likely makes sense to put some limit on the length of the responses that the Interactive Avatar will give. A three-sentence limit is a good place to start, unless your users will expect lengthy replies.

 

Sentence length

Imposing a word limit on the sentences that your Interactive Avatar speaks helps it give concise replies. The HeyGen Interactive Avatar API accepts ‘tasks’ of up to 1,000 characters, but sentences of up to 50 words - which, combined with the 3 sentence limit - will keep the Interactive Avatar’s replies to a generally acceptable length.

 

Naturalism

LLMs have a tendency to introduce themselves too often. You can include in your instructions a directive to “As a general rule, don’t introduce yourself outside of the beginning of the conversation. Avoid the phrase “As a {insert your Interactive Avatar’s name}” in your replies unless prompted by the user to introduce yourself.”

You can also include tonality in these instructions. For example, maybe you’d prefer your Interactive Avatar to appear more or less formal, depending on the Persona it is adopting.

 

Conversation limits

Do you want your Interactive Avatar to decline to respond to questions that don’t fall within the purview of the Knowledge you have provided it? If so, consider adding that to your Instructions: “Politely decline to answer questions about anything other than the history of the Batman character and the Knowledge provided above."

 

Conversation goals

What would you like the user to get out of the interaction with your Interactive Avatar? There is no hard and fast rule, but if the Interactive Avatar is only meant to answer questions, you can include an Instruction to “Offer to answer questions about the history of the Batman character.”

If the ideal outcome of your user’s conversation with a Interactive Avatar is something more concrete, consider adding a more specific guide for the conversation to your Interactive Avatar. For example, you could write, “To begin the conversation with the user, ask which products of our company they are interested in. Once you have a specific product or products that the user is interested in, tell them the detail about those products that have been provided to you in the Knowledge section. If the user asks any questions to which there are no direct answers provided in the Knowledge section, direct them to contact our sales team."

Knowledge
Every time that you respond to user input, provide answers from the below knowledge. Always prioritize this knowledge when replying to users:

We find that it works well to separate any ‘knowledge’ that you want the Interactive Avatar to have at its disposal from the ‘Instructions’ that are meant to guide the flow of conversation. You can think of this as the set of ‘facts’, like resources in a database. If you are using a vector database or some external source of knowledge, you can make that clear in your Knowledge section.

If you want your Interactive Avatar to act as a Batman trivia expert, for example, you may want to include facts about Batman in the ‘Knowledge’ section in your prompt:

Batman first appeared in “Detective Comics #27”, which was released in May 1939