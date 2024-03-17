import { connect, ConnectedProps } from 'react-redux';
import ReduxExample from './ReduxExample';
import { fetchTestData } from '../../../client/redux/actions';
import { TestReducerStateType } from '../../../client/redux/reducers/types';

function mapStateToProps({ test }: { test: TestReducerStateType }) {
  return {
    isFetching: test.isFetching,
    error: test.error,
    data: test.data,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    fetchTestData: () => dispatch(fetchTestData()),
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ConnectedComponentProps = ConnectedProps<typeof connector>;

export default connector(ReduxExample);
