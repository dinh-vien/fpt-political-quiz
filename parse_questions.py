import json
import re
import sys

def parse_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('\r\n', '\n')
    lines = content.split('\n')
    
    questions = []
    
    q_text = []
    options = {}
    
    for line in lines:
        s = line.strip()
        if not s:
            continue
            
        m = re.match(r'^([A-E])\s*[.)]\s*(.*)', s)
        if m:
            letter = m.group(1).upper()
            text = m.group(2)
            options[letter] = text
        elif re.match(r'^[A-E]{1,5}$', s) and len(options) > 0:
            questions.append({
                "question": "\n".join(q_text).strip(),
                "options": options.copy(),
                "answer": s
            })
            q_text = []
            options = {}
        else:
            if len(options) > 0:
                q_text = [s]
                options = {}
            else:
                q_text.append(s)
                
    return questions

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python parse_questions.py <input.md> <output.json>")
        sys.exit(1)
        
    q = parse_file(sys.argv[1])
    
    # Filter out empty or invalid questions
    valid_q = []
    for x in q:
        if x["question"] and len(x["options"]) >= 2:
            valid_q.append(x)
            
    with open(sys.argv[2], 'w', encoding='utf-8') as f:
        json.dump(valid_q, f, ensure_ascii=False, indent=2)
    print(f"Parsed {len(valid_q)} valid questions out of {len(q)}")
