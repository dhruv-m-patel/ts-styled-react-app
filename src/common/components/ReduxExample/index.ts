import { connect, ConnectedProps } from 'react-redux';
import ReduxExample from './ReduxExample';
import { fetchExampleData } from '../../../client/redux/actions';
import { ExampleReducerStateType } from '../../../client/redux/reducers/example';

function mapStateToProps({ example }: { example: ExampleReducerStateType }) {
  return {
    isFetching: example.isFetching,
    error: example.error,
    data: example.data,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    fetchExampleData: () => dispatch(fetchExampleData()),
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ConnectedComponentProps = ConnectedProps<typeof connector>;

export default connector(ReduxExample);
