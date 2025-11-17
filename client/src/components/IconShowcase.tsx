import { Icon, IconButton, IconWithBadge, StatusIcon } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function IconShowcase() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Icon System Showcase
        </h1>
        <p className="text-muted-foreground">
          Professional, elegant icons with refined animations and visual effects
        </p>
      </div>

      {/* Size Variations */}
      <Card>
        <CardHeader>
          <CardTitle>Size Variations</CardTitle>
          <CardDescription>Consistent sizing tokens from xs to 2xl</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.healthcare.heart} size="xs" variant="error" />
              <span className="text-xs text-muted-foreground">xs (12px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.healthcare.heart} size="sm" variant="error" />
              <span className="text-xs text-muted-foreground">sm (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.healthcare.heart} size="md" variant="error" />
              <span className="text-xs text-muted-foreground">md (20px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.healthcare.heart} size="lg" variant="error" />
              <span className="text-xs text-muted-foreground">lg (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.healthcare.heart} size="xl" variant="error" />
              <span className="text-xs text-muted-foreground">xl (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.healthcare.heart} size="2xl" variant="error" />
              <span className="text-xs text-muted-foreground">2xl (40px)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Color Variants</CardTitle>
          <CardDescription>Theme-aware color variations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="default" />
              <span className="text-xs text-muted-foreground">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="primary" />
              <span className="text-xs text-muted-foreground">primary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="secondary" />
              <span className="text-xs text-muted-foreground">secondary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="accent" />
              <span className="text-xs text-muted-foreground">accent</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="success" />
              <span className="text-xs text-muted-foreground">success</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="warning" />
              <span className="text-xs text-muted-foreground">warning</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="error" />
              <span className="text-xs text-muted-foreground">error</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="ghost" />
              <span className="text-xs text-muted-foreground">ghost</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animations & Effects */}
      <Card>
        <CardHeader>
          <CardTitle>Animations & Visual Effects</CardTitle>
          <CardDescription>Smooth transitions and sophisticated effects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Icon 
                icon={IconRegistry.actions.refresh} 
                size="xl" 
                variant="primary"
                animated
              />
              <span className="text-sm font-medium">Animated</span>
              <span className="text-xs text-muted-foreground text-center">Hover scale effect</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon 
                icon={IconRegistry.user.shield} 
                size="xl" 
                variant="primary"
                glowEffect
              />
              <span className="text-sm font-medium">Glow Effect</span>
              <span className="text-xs text-muted-foreground text-center">Subtle luminescence</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <StatusIcon 
                icon={IconRegistry.actions.refresh} 
                size="xl"
                status="loading"
              />
              <span className="text-sm font-medium">Spin</span>
              <span className="text-xs text-muted-foreground text-center">Loading state</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <StatusIcon 
                icon={IconRegistry.status.warning} 
                size="xl"
                status="warning"
                pulse
              />
              <span className="text-sm font-medium">Pulse</span>
              <span className="text-xs text-muted-foreground text-center">Attention grabber</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Icon Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Icon Buttons</CardTitle>
          <CardDescription>Elegant hover states and transitions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 flex-wrap">
            <IconButton 
              icon={IconRegistry.actions.edit} 
              size="md"
              onClick={() => alert('Edit clicked')}
            />
            <IconButton 
              icon={IconRegistry.actions.delete} 
              size="md"
              onClick={() => alert('Delete clicked')}
            />
            <IconButton 
              icon={IconRegistry.actions.save} 
              size="md"
              onClick={() => alert('Save clicked')}
            />
            <IconButton 
              icon={IconRegistry.actions.download} 
              size="md"
              onClick={() => alert('Download clicked')}
            />
            <IconButton 
              icon={IconRegistry.navigation.settings} 
              size="md"
              onClick={() => alert('Settings clicked')}
            />
            <IconButton 
              icon={IconRegistry.actions.refresh} 
              size="md"
              onClick={() => alert('Refresh clicked')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Icons with Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Icons with Badges</CardTitle>
          <CardDescription>Notification indicators and counters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <IconWithBadge 
                icon={IconRegistry.communication.bell} 
                size="xl"
                badgeContent={5}
                badgeVariant="error"
              />
              <span className="text-sm text-muted-foreground">Notifications</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWithBadge 
                icon={IconRegistry.communication.message} 
                size="xl"
                badgeContent={12}
                badgeVariant="primary"
              />
              <span className="text-sm text-muted-foreground">Messages</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWithBadge 
                icon={IconRegistry.navigation.jobs} 
                size="xl"
                badgeContent={3}
                badgeVariant="warning"
              />
              <span className="text-sm text-muted-foreground">Pending Jobs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWithBadge 
                icon={IconRegistry.status.success} 
                size="xl"
                badgeContent="✓"
                badgeVariant="success"
              />
              <span className="text-sm text-muted-foreground">Completed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Status Indicators</CardTitle>
          <CardDescription>Visual feedback for application states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-green-50 dark:bg-green-950">
              <Icon icon={IconRegistry.status.success} size="lg" variant="success" />
              <div>
                <p className="font-medium">Success</p>
                <p className="text-xs text-muted-foreground">Operation completed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-amber-50 dark:bg-amber-950">
              <StatusIcon icon={IconRegistry.status.warning} status="warning" size="lg" />
              <div>
                <p className="font-medium">Warning</p>
                <p className="text-xs text-muted-foreground">Attention needed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-red-50 dark:bg-red-950">
              <Icon icon={IconRegistry.status.error} size="lg" variant="error" />
              <div>
                <p className="font-medium">Error</p>
                <p className="text-xs text-muted-foreground">Action failed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-blue-50 dark:bg-blue-950">
              <StatusIcon icon={IconRegistry.actions.refresh} status="loading" size="lg" />
              <div>
                <p className="font-medium">Loading</p>
                <p className="text-xs text-muted-foreground">Please wait...</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-purple-50 dark:bg-purple-950">
              <Icon icon={IconRegistry.status.pending} size="lg" className="text-purple-600" />
              <div>
                <p className="font-medium">Pending</p>
                <p className="text-xs text-muted-foreground">In progress</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 dark:bg-gray-950">
              <Icon icon={IconRegistry.status.unassigned} size="lg" variant="ghost" />
              <div>
                <p className="font-medium">Unassigned</p>
                <p className="text-xs text-muted-foreground">No action</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Icon Categories</CardTitle>
          <CardDescription>Organized registry with logical groupings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon icon={IconRegistry.navigation.home} size="sm" />
              Navigation
            </h4>
            <div className="flex flex-wrap gap-4">
              <Icon icon={IconRegistry.navigation.dashboard} size="md" animated />
              <Icon icon={IconRegistry.navigation.calendar} size="md" animated />
              <Icon icon={IconRegistry.navigation.documents} size="md" animated />
              <Icon icon={IconRegistry.navigation.billing} size="md" animated />
              <Icon icon={IconRegistry.navigation.analytics} size="md" animated />
              <Icon icon={IconRegistry.navigation.settings} size="md" animated />
            </div>
          </div>
          
          <Separator />
          
          {/* Healthcare */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon icon={IconRegistry.healthcare.stethoscope} size="sm" variant="error" />
              Healthcare
            </h4>
            <div className="flex flex-wrap gap-4">
              <Icon icon={IconRegistry.healthcare.heart} size="md" variant="error" />
              <Icon icon={IconRegistry.healthcare.activity} size="md" variant="error" />
              <Icon icon={IconRegistry.healthcare.pill} size="md" variant="error" />
              <Icon icon={IconRegistry.healthcare.syringe} size="md" variant="error" />
              <Icon icon={IconRegistry.healthcare.clipboard} size="md" variant="error" />
            </div>
          </div>
          
          <Separator />
          
          {/* Actions */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon icon={IconRegistry.actions.edit} size="sm" variant="primary" />
              Actions
            </h4>
            <div className="flex flex-wrap gap-4">
              <Icon icon={IconRegistry.actions.add} size="md" variant="primary" />
              <Icon icon={IconRegistry.actions.edit} size="md" variant="primary" />
              <Icon icon={IconRegistry.actions.delete} size="md" variant="primary" />
              <Icon icon={IconRegistry.actions.save} size="md" variant="primary" />
              <Icon icon={IconRegistry.actions.search} size="md" variant="primary" />
              <Icon icon={IconRegistry.actions.filter} size="md" variant="primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Principles */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle>Design Principles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Icon icon={IconRegistry.ui.star} size="lg" variant="warning" glowEffect />
              <div>
                <h5 className="font-semibold mb-1">Elegance</h5>
                <p className="text-sm text-muted-foreground">
                  Refined strokes, balanced proportions, and subtle visual effects
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon={IconRegistry.ui.check} size="lg" variant="success" />
              <div>
                <h5 className="font-semibold mb-1">Consistency</h5>
                <p className="text-sm text-muted-foreground">
                  Uniform sizing, spacing, and animation timing throughout
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon={IconRegistry.business.trendingUp} size="lg" variant="accent" />
              <div>
                <h5 className="font-semibold mb-1">Performance</h5>
                <p className="text-sm text-muted-foreground">
                  Optimized animations with minimal re-renders
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon={IconRegistry.user.userCheck} size="lg" variant="primary" />
              <div>
                <h5 className="font-semibold mb-1">Accessibility</h5>
                <p className="text-sm text-muted-foreground">
                  Clear meanings, proper contrast, and ARIA support
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
