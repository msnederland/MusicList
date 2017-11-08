import React from 'react';
import 'whatwg-fetch';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';

import LoginPage from './LoginPage';