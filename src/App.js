import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/todo/modal/Modal';
import TodoList from './components/todo/TodoList/TodoList';
import Context from './context';
import FilterSearch from './components/filter/FilterSearch'
import FilterStatus from './components/filter/FilterStatus'


function App() {
  const [select, setSelect] = useState('все')
  const [search, setSearch] = useState('')
  const [filterSearch, setFilterSearch] = useState([])
  const [filter, setFilter] = useState([])
  const [clients, setClients] = useState([
    {
      id: 1,
      completed: true,
      date: '15.10.2020',
      company: 'Нет названия',
      name: 'Попов Владислав Андреевич',
      tel: '+7-900-049-13-28',
      com: 'По всем вопросам пишите мне на почту: gaemvlad@gmail.com',
      ATI: '12345',
      status: 'активно',
    }
  ])

  function statusTodo(id) {
    setClients(
      clients.map(c => {
        if (c.id === id) {
          c.completed = !c.completed
          if (!c.completed) {
            c.status = 'завершено'
          } else {
            c.status = 'активно'
          }

        }
        return c
      })
    )
  }
  function removeClient(id) {
    setClients(clients.filter(client => client.id !== id))
  }

  function addClient(newClient) {
    setClients(clients.concat([newClient]))
  }

  function changeClient(newClient) {
    setClients(
      filter.map(client => {
        if (client.id === newClient.id) {
          client.name = newClient.name
          client.date = newClient.date
          client.company = newClient.company
          client.tel = newClient.tel
          client.com = newClient.com
          client.ATI = newClient.ATI
        }
        return client
      })
    )
  }
  function arrays(arr1, arr2) {
    let arr3 = []
    arr1.map(a1 => {
      arr2.map(a2 => {
        if (a1.name === a2.name) {
          arr3.push(a2)
        }
        return a2
      })
      return a1
    })
    return arr3
  }


  useEffect(() => {
    setFilter(clients)
    if (search !== '') {
      setFilterSearch(prev => {
        let a = clients.filter(client => {
          return (
            client.name.toLowerCase().indexOf(search.toLowerCase()) !== - 1 ||
            client.company.toLowerCase().indexOf(search.toLowerCase()) !== - 1 ||
            client.tel.toLowerCase().indexOf(search.toLowerCase()) !== - 1 ||
            client.com.toLowerCase().indexOf(search.toLowerCase()) !== - 1 ||
            client.ATI.toLowerCase().indexOf(search.toLowerCase()) !== - 1
          )
        })
        if (select !== 'все') {
          setFilter([])
          setFilter(prev => {
            let b = prev.concat(clients.filter(u => {
              return u.status === select
            }))
            let c = arrays(a, b)
            return c
          })
        } else {
          setFilter([])
          setFilter(prev => {
            let e = prev.concat(clients)
            let c = arrays(a, e)
            return c
          })
        }
        return a
      })
    }
    else {
      setFilterSearch(clients)
      setFilterSearch(prev => {
        let d = prev
        if (select !== 'все') {
          setFilter([])
          setFilter(prev => {
            let b = prev.concat(clients.filter(u => {
              return u.status === select
            }))
            let c = arrays(d, b)
            return c
          })
        } else {
          setFilter([])
          setFilter(prev => prev.concat(clients))
        }
        return d
      })
    }
  }, [search, select, clients])


  return (
    <Context.Provider value={{ removeClient, addClient, changeClient }}>
      <div className="App">
        <h1>Оформи заявку в нашей CRM</h1>
        <div>
          <FilterSearch className="filterSearch" value={search} onChangeSearchFilter={event => setSearch(event.target.value)} />
          <div className="filterStatus">
            <label>Статус задач </label>
            <FilterStatus value={select} onChangeStatus={event => setSelect(event.target.value)} />
          </div>
        </div>

        <Modal className="modalAdd" title='+ Добавить задачу' />
        <TodoList clients={filter} changeStatus={statusTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
