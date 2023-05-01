import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(async () => {
    service = new ToastService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the show method', () => {
    service.show({
      header: 'my toast header',
      body: 'toast message'
    });
    expect(service.toasts.length).toEqual(1)
  });

  it('should call the showError method', () => {
    service.showError({
      header: 'my toast header',
      body: 'toast message'
    });
    expect(service.toasts[0].classname).toEqual('bg-danger text-light')
  });

  it('should remove the toast', () => {
    service.show({
      header: 'my toast header',
      body: 'toast message'
    });
    expect(service.toasts.length).toEqual(1)
    service.remove(service.toasts[0]);
    expect(service.toasts.length).toEqual(0)
  })
});
