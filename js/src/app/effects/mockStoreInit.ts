import { getEditedReport } from '../reducers';

export const initialState = {
  reports: {
    reports: [
      {
        id: 4,
        name: 'afasdf',
        modified: '2018-01-18',
        root_model: 5,
        root_model_name: 'content type',
        user_created: {
          first_name: '',
          last_name: '',
          id: 1
        }
      }
    ],
    selectedReport: {
      id: 4,
      name: 'afasdf',
      description: 'adgsasfg',
      modified: '2018-01-18',
      root_model: 5,
      root_model_name: 'content type',
      displayfield_set: [
        {
          id: 1,
          path: '',
          path_verbose: '',
          field: 'model',
          field_verbose: 'python model class name',
          name: 'model',
          sort: null,
          sort_reverse: false,
          width: 15,
          aggregate: '',
          position: 0,
          total: false,
          group: false,
          report: 4,
          display_format: null,
          field_type: 'CharField'
        },
        {
          id: 2,
          path: '',
          path_verbose: '',
          field: 'id',
          field_verbose: 'ID',
          name: 'id',
          sort: null,
          sort_reverse: false,
          width: 15,
          aggregate: '',
          position: 1,
          total: false,
          group: false,
          report: 4,
          display_format: null,
          field_type: 'AutoField'
        }
      ],
      distinct: false,
      user_created: 1,
      user_modified: null,
      filterfield_set: [],
      report_file: null,
      report_file_creation: null
    },
    relatedFields: [
      {
        field_name: 'comment',
        verbose_name: 'comment_set',
        path: '',
        help_text: '',
        model_id: 5,
        parent_model_name: 'comment',
        parent_model_app_label: false,
        included_model: true,
        children: []
      },
      {
        field_name: 'report',
        verbose_name: 'report_set',
        path: '',
        help_text: '',
        model_id: 5,
        parent_model_name: 'report',
        parent_model_app_label: false,
        included_model: true,
        children: []
      },
      {
        field_name: 'permission',
        verbose_name: 'permission_set',
        path: '',
        help_text: '',
        model_id: 5,
        parent_model_name: 'permission',
        parent_model_app_label: false,
        included_model: true,
        children: []
      },
      {
        field_name: 'logentry',
        verbose_name: 'logentry_set',
        path: '',
        help_text: '',
        model_id: 5,
        parent_model_name: 'logentry',
        parent_model_app_label: false,
        included_model: true,
        children: []
      }
    ],
    fields: [
      {
        name: 'model',
        field: 'model',
        field_verbose: 'python model class name',
        field_type: 'CharField',
        is_default: true,
        field_choices: [],
        can_filter: true,
        path: '',
        path_verbose: '',
        help_text: ''
      },
      {
        name: 'app_label',
        field: 'app_label',
        field_verbose: 'app label',
        field_type: 'CharField',
        is_default: true,
        field_choices: [],
        can_filter: true,
        path: '',
        path_verbose: '',
        help_text: ''
      },
      {
        name: 'id',
        field: 'id',
        field_verbose: 'ID',
        field_type: 'AutoField',
        is_default: true,
        field_choices: [],
        can_filter: true,
        path: '',
        path_verbose: '',
        help_text: ''
      }
    ],
    descriptionInput: 'adgsasfg',
    isDistinct: false
  },
  displayFields: {
    ids: [],
    entities: {}
  }
};

export const editedReport = getEditedReport(initialState as any);
