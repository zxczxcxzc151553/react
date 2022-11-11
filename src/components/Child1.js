import React, {useRef} from "react";
import { Button ,Form, InputGroup } from "react-bootstrap"

const Child1 = ({setData}) => {
  const todoRef = useRef();
  
  const insertTodo = () => {
    setData(todoRef.current.value);
    todoRef.current.value ="";
    todoRef.current.focus();
  };

  const keyInsert = (Event) => {
    if(Event.keyCode === 13){
      insertTodo();
    }
  };
  
  return (
    <div>
      <h1>자식1</h1>
        <InputGroup className="mb-3" style={{width : "300px"}}>
        <Form.Control
          ref={todoRef}
         placeholder="할일을 입력하세요"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
        </InputGroup>;
    
      </div>
    );
  }

export default Child1;