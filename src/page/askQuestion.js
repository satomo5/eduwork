import React, { useState } from "react";
import InputBuilder from "../components/inputBuilder";
import Container from "../components/container";
import Button from "../components/button";

const INIT = {
  title: "",
  description: "",
  tag_input: '',
  tag: [],
}

const FormSection = props => {
  return (
    <div className="mb-[20px] border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-[20px] bg-white">
      <p className="font-bold text-lg">{props.title || 'Title'}</p>
      <p className="text-gray-500 text-sm mb-2">{props.subtitle || 'Subtitle'}</p>
      {props.children}
    </div>
  )
}

const AskQuestion = () => {
  const [form, setForm] = useState(INIT);

  const submit = () => {
    setForm(INIT)
  }
  
  return (
    <Container>
      <FormSection title="Title"  subtitle="Be specific and imagine you are asking a question to another person.">
        <InputBuilder
          typeForm="input"
          type="text"
          value={form.title}
          onInput={(e) => setForm({ ...form, title: e.target.value })}
        />
      </FormSection>
      <FormSection title="What are the details of your problem?"  subtitle="Introduce the problem and expand on what you put in the title. Minimum 20 characters.">
        <InputBuilder
          typeForm="textarea"
          value={form.description}
          onInput={(e) => setForm({ ...form, description: e.target.value })}
        />
      </FormSection>
      <FormSection title="Tags"  subtitle="Add up to 5 tags to describe what your question is about. Start typing to see suggestions.">
        <InputBuilder
          typeForm="input"
          type="text"
          value={form.tag_input}
          onInput={(e) => setForm({ ...form, tag_input: e.target.value })}
          onKeyUp={(e) => {
            if (e.code === 'Enter' && e.target.value) setForm({ ...form, tag: [...form.tag, e.target.value], tag_input: '' })
          }}
        />
        {form.tag?.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-4">
            {form.tag.map((item, id) => {
              return (
                <div key={id} className="text-[12px] cursor-pointer p-2 text-blue-800 bg-blue-200 hover:bg-blue-400 duration-150 rounded-sm">
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </FormSection>
      <div className="flex justify-end">
        <Button type='primary' onClick={e => submit()}>Submit</Button>
      </div>
    </Container>
  );
};

export default AskQuestion;
