const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Lead número 1'},
    'task-2': {id: 'task-2', content: 'Lead número 2'},
    'task-3': {id: 'task-3', content: 'Lead número 3'},
    'task-4': {id: 'task-4', content: 'Lead número 4'},
    'task-5': {id: 'task-5', content: 'Lead número 5'},
    'task-6': {id: 'task-6', content: 'Lead número 6'},
    'task-7': {id: 'task-7', content: 'Lead número 7'},
    'task-8': {id: 'task-8', content: 'Lead número 8'},
    'task-9': {id: 'task-9', content: 'Lead número 9'},
    'task-10': {id: 'task-10', content: 'Lead número 10'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Aguarda atendimento',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Frio',
      taskIds: ['task-8','task-9','task-10'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Morno',
      taskIds: [],
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData