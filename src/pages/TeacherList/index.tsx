import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem , {Teacher} from '../../components/TeacherItem'

import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import './styles.css';



function TeacherList(){

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

       const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
             <PageHeader title="Este são os proffys disponíveis">
                 <form id="search-teachers" onSubmit={searchTeachers}>
                 <Select
                name="subject" 
                label="Matéria"
                value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}
                options={[
                    { value: 'Artes', label: 'Artes' },
                    { value: 'Biologia', label: 'Biologia' },
                    { value: 'Ciências', label: 'Ciências' },
                    { value: 'Educação física', label: 'Educação física' },
                    { value: 'Álgebra', label: 'Álgebra' },
                    { value: 'Geometria', label: 'Geometria' },
                    { value: 'Matemática', label: 'Matemática' },
                    { value: 'Física', label: 'Física' },
                    { value: 'Química', label: 'Química' },
                    { value: 'Português', label: 'Português' },
                    { value: 'Gramática', label: 'Gramática' },
                    { value: 'Literatura', label: 'Literatura' },
                    { value: 'Redação', label: 'Redação' },
                    { value: 'Filosofia', label: 'Filosofia' },
                    { value: 'Sociologia', label: 'Sociologia' },
                    { value: 'História', label: 'História' },
                    { value: 'Geografia', label: 'Geografia' },
                    { value: 'Teatro', label: 'Teatro' },
                    { value: 'Música', label: 'Música' },
                    { value: 'Inglês', label: 'Inglês' },
                    { value: 'Espanhol', label: 'Espanhol' },
                ]} />
                 <Select 
                name="week_day" 
                label="Dia da semana"
                value={week_day}
                onChange={(e)=>{setWeekDay(e.target.value)}}
                options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                ]} />
                     <Input type="time" name="time" label="Hora" value={time} onChange={(e)=>{setTime(e.target.value)}}/>

                <button type="submit">
                    Buscar
                </button>

                 </form>
             </PageHeader>

            <main>
                {teachers.map((teacher : Teacher)=>{
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>


        </div>
    );
}

export default TeacherList;